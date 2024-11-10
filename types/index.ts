export interface GiftItem {
    name: string;
    price: string;
    description: string;
    image: string;
    position: {
        x: string;
        y: string;
        rotate: number;
    };
}

export interface SnowflakeStyle {
    id: number;
    left: string;
    animationDuration: string;
    opacity: number;
    fontSize: string;
} 