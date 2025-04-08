import { IBot } from "@/entities/bot";


export interface IProfitability {
    trading_capital: number,
    trading_capital_currency: "eth" | "btc",
    balance: number,
    on_hold: number,
    bots: IBot[],
}