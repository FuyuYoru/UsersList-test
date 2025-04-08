export const getFullStatistics = (startDate: Date) => {
    // вернёт массив случайных значений для графика.
    // длина массива = количество часов между текущей датой и датой началы работы бота
    const start = new Date(startDate);
    const now = new Date();
    
    const hoursDiff = Math.floor((now - start) / (1000 * 60 * 60 * 2));
    
    const data = Array.from({ length: hoursDiff }, () => 
        Math.floor(Math.random() * (40 - 10 + 1)) + 10
    );
    
    return data;
}