import { IBot } from "@/entities/bot/model/types";
import { BotIcon } from "@/entities/bot/ui/BotIcon";
import { MegabotIcon } from "@/entities/bot/ui/MegabotIcon";
import { FC } from "react";
import clsx from "clsx";

type BotCardProps = {
  bot: IBot;
  selectedPeriod: '24h' | '7d' | '30d' | '60d' | '90d' | 'all_time';
  onClick: () => void;
  isSelected?: boolean;
}

export const BotCard: FC<BotCardProps> = ({ bot, selectedPeriod, onClick, isSelected = false }) => {
  return (
    <div
      className={clsx(
        "flex flex-col justify-center items-center gap-2 w-[33%] h-1/2 bg-[#1c293f] rounded-md",
        isSelected
      )}
      style={isSelected ? { background: "radial-gradient(#1c293f,#1c293f, #1a3450)" } : undefined}

      onClick={onClick}
    >
      {bot.type === 'megabot' ? <MegabotIcon color={bot.color} /> : <BotIcon color={bot.color} />}
      <div className="flex flex-col gap-[1px]">
        <p className="inline m-0 text-white font-bold text-xs text-center">
          {bot.type.toUpperCase()}
        </p>
        <p className="inline m-0 text-[#5ba352] font-bold text-xs text-center">
          {bot[selectedPeriod]}%
        </p>
      </div>
    </div>
  );
};
