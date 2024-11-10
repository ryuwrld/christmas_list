export const FlyingSanta = () => {
    const randomTop = Math.floor(Math.random() * 30) + 20;

    return (
        <div className="fixed z-10 animate-flyAcross"
            style={{ top: `${randomTop}%` }}
        >
            <div className="relative">
                <img
                    src="/images/santa-sleigh.png"
                    alt="Santa's Sleigh"
                    className="w-24 h-auto transform -scale-x-100"
                />
                <div className="absolute top-1/2 right-0 w-20 h-2">
                    {[...Array(5)].map((_, i) => (
                        <div
                            key={`sparkle-${i}`}
                            className="absolute w-1 h-1 bg-[#FFD966] rounded-full animate-twinkle"
                            style={{
                                right: `${i * 4}px`,
                                animationDelay: `${i * 0.2}s`
                            }}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    )
} 