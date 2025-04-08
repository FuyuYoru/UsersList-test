import { useProfitabilityStore } from "@/features/profitability/model/store";
import { AlignJustify, RefreshCcw } from "lucide-react";
import { FC } from "react";
import { useLocation } from "react-router-dom";

const pageTitles = {
    '/': 'Dashboard',
    '/megabot': 'Megabot',
    '/bot-market': 'Bot Market',
    '/coin-prices': 'Coin prices',
    '/profile': 'Profile',
}

export const Header: FC = () => {

    const location = useLocation();
    const { loadProfitabilityData } = useProfitabilityStore();
    const pageTitle = pageTitles[location.pathname] || '404';

    const reloadAction = async () => {
        await loadProfitabilityData();
    }

    return (
        <header className="flex flex-row px-4 h-[4rem] justify-between items-center relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150px] h-[50px] bg-[#023150] blur-xl"></div>
            <AlignJustify />
            <p className="relative text-lg font-bold" >
                {pageTitle}
            </p>
            <RefreshCcw onClick={reloadAction} />
        </header>
    )
}