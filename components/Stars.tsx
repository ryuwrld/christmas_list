export const Stars = () => {
    const staticStars = [
        { top: '15%', left: '25%', size: 5 },
        // ... rest of your stars array
    ];

    return (
        <div className="fixed inset-0 -z-5">
            {staticStars.map((star, index) => (
                <div
                    key={index}
                    className={`absolute rounded-full bg-[#F4F4F9] ${star.size === 4 ? 'animate-northStar' : 'animate-starTwinkle'
                        }`}
                    style={{
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        top: star.top,
                        left: star.left,
                        animationDelay: `${index * 0.1}s`,
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