import { useMemo } from 'react'

export const Stars = () => {
    const staticStars = useMemo(() => Array.from({ length: 25 }, () => ({
        top: `${Math.random() * 80}%`,
        left: `${Math.random() * 95}%`,
        size: Math.random() > 0.8 ? 4 : Math.floor(Math.random() * 2) + 3,
        delay: `${Math.random() * 3}s`
    })), []);

    return (
        <div className="fixed inset-0 -z-5">
            {staticStars.map((star, index) => (
                <div
                    key={`star-${index}-${star.top}-${star.left}`}
                    className={`absolute rounded-full bg-[#F4F4F9] opacity-90
                        ${star.size === 4 ? 'animate-northStar' : 'animate-starTwinkle'}`}
                    style={{
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        top: star.top,
                        left: star.left,
                        animationDelay: star.delay,
                        filter: `blur(${star.size === 4 ? '1px' : '0.5px'})`
                    }}
                >
                    <div
                        className="absolute inset-0 rounded-full bg-[#F4F4F9]/20 blur-sm"
                        style={{
                            transform: `scale(${star.size === 4 ? 1.5 : 1})`
                        }}
                    ></div>
                </div>
            ))}
        </div>
    );
}; 