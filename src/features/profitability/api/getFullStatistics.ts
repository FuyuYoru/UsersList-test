import { dashboardData } from "@/mock/dashbord";
import { IProfitability } from "../model/types";

export const getFullStatistics = async (): Promise<IProfitability> => {
    // вернёт массив случайных значений для графика.
    // длина массива = количество часов между текущей датой и датой началы работы бота
    const statistics = { ...dashboardData };

    statistics.bots = await Promise.all(
        statistics.bots.map(async bot => {
            const start = new Date(bot.started_at);
            const now = new Date();
            const hoursDiff = Math.floor((now - start) / (1000 * 60 * 60 * 2));

            const fullStatistics = await new Promise(resolve => {
                setTimeout(() => {
                    resolve(Array.from({ length: hoursDiff }, () => Math.floor(Math.random() * (40 - 10 + 1)) + 10));
                }, 100)
            })

            return { ...bot, fullStatistics };
        })
    )
    return statistics;
}