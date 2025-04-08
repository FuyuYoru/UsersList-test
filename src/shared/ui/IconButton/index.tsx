import clsx from "clsx";
import { ButtonHTMLAttributes, FC } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
    icon: React.ReactNode,
    text: string,
}

export const IconButton: FC<Props> = ({icon, text, className, ...props}) => {
    return (
        <button className={clsx('flex flex-col items-center', className)} {...props}>
            <span>{icon}</span>
            <span className="text-xs">{text}</span>
        </button>
    )
}