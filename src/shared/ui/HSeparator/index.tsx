import { FC } from "react";
import styles from './index.module.scss';

export const HSeparator: FC<{ content?: string }> = ({ content }) => {
    return (
        <>
            {content
                ?
                <div className={styles.separator}></div>
                :
                <div className={styles['separator-container']}>
                    <div className={styles.separator}></div>
                    <div>{content}</div>
                    <div className={styles.separator}></div>
                </div>
            }
        </>
    );
}