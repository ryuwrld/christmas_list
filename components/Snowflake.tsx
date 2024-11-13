import { FC } from 'react'

interface SnowflakeProps {
    style: React.CSSProperties;
}

export const Snowflake: FC<SnowflakeProps> = ({ style }) => (
    <div
        className="absolute text-white text-opacity-80 will-change-transform animate-fall"
        style={style}
    >
        ❄
    </div>
) 