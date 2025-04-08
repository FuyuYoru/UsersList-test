import { create } from "zustand";
import { IBot } from "@/entities/bot";
import { getFullStatistics } from "../api/getFullStatistics";

interface IProfitabilityStore {
    trading_capital: number | null;
    trading_capital_currency: "eth" | "btc" | null;
    balance: number | null;
    on_hold: number | null;
    bots: IBot[] | null;
    // setProfitabilityData: (statistics: IProfitability) => void;
    loadProfitabilityData: () => Promise<void>;
}

export const useProfitabilityStore = create<IProfitabilityStore>((set) => {
    const savedData = localStorage.getItem("profitabilityData");
    const initialState: IProfitabilityStore = savedData ? JSON.parse(savedData) : {
        trading_capital: null,
        trading_capital_currency: null,
        balance: null,
        on_hold: null,
        bots: null,
    };

    return {
        ...initialState,

        // setProfitabilityData: (statistics: IProfitability) => {
        //     localStorage.setItem("profitabilityData", JSON.stringify(statistics));
        //     set(statistics);
        // },

        loadProfitabilityData: async () => {
            try {
                const response = await getFullStatistics();
                
                localStorage.setItem("profitabilityData", JSON.stringify(response));
                set(() => ({
                    trading_capital: response.trading_capital,
                    trading_capital_currency: response.trading_capital_currency,
                    balance: response.balance,
                    on_hold: response.on_hold,
                    bots: response.bots,
                }));
            } catch (error) {
                console.error("Ошибка при загрузке данных о доходности:", error);
            }
        },
    };
});
