import { useEffect, useState } from "react";
import { IntervalSelector } from "@/shared/ui/IntervalSelector";
import { useProfitabilityStore } from "@/features/profitability/model/store";
import { BotCard, IBot } from "@/entities/bot";
import { ProfitChart } from "@/features/profitability/ui/ProfitChart";

export const Dashboard = () => {
    const { trading_capital, trading_capital_currency, balance, on_hold, bots, loadProfitabilityData } = useProfitabilityStore();

    const [selectedBot, setSelectedBot] = useState<IBot | null>(null);
    const [selectedPeriod, setSelectedPeriod] = useState<'24h' | '7d' | '30d' | 'all_time'>('7d');

    useEffect(() => {
        const fetchData = async () => {
            if ([trading_capital, trading_capital_currency, balance, on_hold, bots].every(value => value === null)) {
                await loadProfitabilityData();
                if (bots && bots.length > 0) {
                    setSelectedBot(bots[0]);
                }
            }
        };

        fetchData();
    }, [trading_capital, trading_capital_currency, balance, on_hold, bots, loadProfitabilityData]);

    useEffect(() => {
        if (bots && bots.length > 0) {
            setSelectedBot(bots.find(item => item.name === selectedBot?.name) || bots[0]);
        }
    }, [bots]);

    return (
        <div className="w-full h-full flex flex-col justify-between h-[calc(100dvh - 8rem)]">
            <div className="flex flex-col gap-4 h-[50%]">
                <div className="flex flex-row px-4 justify-between h-[4rem]">
                    <div className="flex flex-col">
                        <p className="font-bold text-sm">TRADING CAPITAL</p>
                        <p className="text-4xl text-white    ">{`${trading_capital} ${trading_capital_currency?.toUpperCase()}`}</p>
                    </div>
                    <div className="flex flex-col gap-0 items-start justify-end">
                        <p className="font-bold text-sm">BALANCE: <span className="text-white">{balance}</span></p>
                        <p className="font-bold text-sm">ON HOLD: <span className="text-white">{on_hold}</span></p>
                    </div>
                </div>
                {selectedBot && <ProfitChart fullStatistics={selectedBot.fullStatistics} startDate={selectedBot.started_at} />}
            </div>
            <div className="flex flex-col h-[50%]">
                <div className="flex flex-row flex-wrap w-full h-[80%] px-4 gap-[1px] justify-center">
                    {bots?.map((item) =>
                        <BotCard
                            key={item.name}
                            bot={item}
                            selectedPeriod={selectedPeriod}
                            onClick={() => setSelectedBot(item)}
                            isSelected={selectedBot?.name === item.name}
                        />
                    )}
                </div>
                <div className="flex flex-row w-full h-[20%] px-4 text-sm items-center gap-1">
                    <span className="text-nowrap font-bold">Time Range:</span>
                    <IntervalSelector onChange={(period) => setSelectedPeriod(period)} defaultValue={selectedPeriod} />
                </div>
            </div>
        </div>
    );
};
