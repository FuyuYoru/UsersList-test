import { FC } from "react";

type BotIconProps = {
  size?: number;
  color?: string;
};

export const BotIcon: FC<BotIconProps> = ({ size = 45, color = "#ffdb00" }) => {
  return (
    <svg width={size} height={size * 0.777777778} viewBox="0 0 90 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M30 0H40V10H50V0H60V10H70V20H80V30H90V70H80V60H70V70H60V60H50V70H40V60H30V70H20V60H10V70H0V30H10V20H20V10H30V0ZM70 30V40H50V30H70ZM40 30H20V40H40V30Z" fill={color} />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M40 0H30V10H20V20H10V30H0V70H10V60H20V70H30V60H40V70H45V10H40V0ZM20 30V40H40V30H20Z" fill={color} />
    </svg>
  );
};