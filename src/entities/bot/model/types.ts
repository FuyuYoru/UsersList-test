export interface IBot {
    "name": string,
    "type": "defence" | "megabot" | "attack" | "balance",
    "color": string,
    "cost": number,
    "24h": number,
    "7d": number,
    "30d": number,
    "60d": number,
    "90d": number,
    "all_time": number,
    "started_at": string,
    "fullStatistics": number[],
}