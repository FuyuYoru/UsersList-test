/* eslint-disable no-undef */
import React, { useEffect, useState, useCallback } from 'react';
import styles from './index.module.scss';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  withDebounce?: boolean;
  debounceDelay?: number;
  onChange?: (value: string) => void;
};

export const Input: React.FC<InputProps> = ({
  withDebounce = false,
  debounceDelay = 500,
  onChange,
  ...props
}) => {
  const [internalValue, setInternalValue] = useState(props.value ?? '');

  useEffect(() => {
    if (props.value !== undefined) {
      setInternalValue(props.value);
    }
  }, [props.value]);

  const debouncedChange = useCallback(
    (() => {
      let timeout;
      return (value: string) => {
        if (!withDebounce && onChange) {
          onChange(value);
          return;
        }

        clearTimeout(timeout);
        timeout = setTimeout(() => {
          onChange?.(value);
        }, debounceDelay);
      };
    })(),
    [onChange, debounceDelay, withDebounce]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInternalValue(val);
    debouncedChange(val);
  };

  return (
    <div className={styles['input_container']}>
      <input
        {...props}
        value={internalValue}
        onChange={handleChange}
      />
    </div>
  );
};
