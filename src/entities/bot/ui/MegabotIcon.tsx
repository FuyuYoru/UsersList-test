import { FC } from "react";

type MegabotIconProps = {
  size?: number;
  color?: string;
};

export const MegabotIcon: FC<MegabotIconProps> = ({ size = 45, color = "#ffdb00" }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M30 10H40V20H50V10H60V20H70V30H80V40H90V70H80V50H70V70H60V80H70V90H50V70H40V90H20V80H30V70H20V50H10V70H0V40H10V30H20V20H30V10ZM50 30H60V40H50V30ZM40 30H30V40H40V30Z" fill="#E4C42D" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M40 10H30V20H20V30H10V40H0V70H10V50H20V70H30V80H20V90H40V70H45V20H40V10ZM40 30H30V40H40V30Z" fill={color} />
      <path d="M60 0C63.3 0 66.6 0 70 0C70 3.3 70 6.6 70 10C66.7 10 63.4 10 60 10C60 6.7 60 3.4 60 0Z" fill={color} />
      <path d="M20 0C23.3 0 26.6 0 30 0C30 3.3 30 6.6 30 10C26.7 10 23.4 10 20 10C20 6.7 20 3.4 20 0Z" fill={color} />
    </svg>
  );
};