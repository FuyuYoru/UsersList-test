import clsx from "clsx";
import { ButtonHTMLAttributes, FC } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: React.ReactNode,
    text: string,
    counterValue?: number,
}

export const IconButtonWithCounter: FC<Props> = ({ icon, text, className, counterValue = 0, ...props }) => {
    return (
        <button className={clsx('flex flex-col items-center relative', className)} {...props}>
            {counterValue &&
                <span className="absolute top-[-15%] left-[63%] w-[21px] h-[21px] text-white bg-[#fb9818] rounded-full flex justify-center items-center">{counterValue}</span>
            }
            <span>{icon}</span>
            <span className="text-xs">{text}</span>
        </button>
    )
}