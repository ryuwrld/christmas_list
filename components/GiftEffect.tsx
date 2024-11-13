export const GiftEffect = () => {
    return (
        <div className="absolute inset-0 pointer-events-none">
            <div className="relative w-full h-full">
                {[...Array(12)].map((_, i) => (
                    <div
                        key={`sparkle-${i}`}
                        className="absolute w-1 h-1 bg-[#FFD966] rounded-full animate-sparkleOut"
                        style={{
                            left: `${50 + Math.cos(i * 30 * Math.PI / 180) * 20}%`,
                            top: `${50 + Math.sin(i * 30 * Math.PI / 180) * 20}%`,
                            animationDelay: `${i * 0.1}s`
                        }}
                    />
                ))}
            </div>
        </div>
    )
} 