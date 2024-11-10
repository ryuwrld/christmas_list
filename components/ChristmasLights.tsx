export const ChristmasLights = () => (
    <div className="fixed top-0 left-0 right-0 z-10">
        <div className="h-1 w-full bg-gradient-to-b from-[#2C3E50] to-[#34495E] rounded-full"></div>
        <div className="flex justify-around relative -mt-1.5">
            {[...Array(20)].map((_, i) => (
                <div key={`light-${i}`} className="relative">
                    <div className="absolute top-1.5 h-0.5 bg-[#2C3E50] w-full"></div>
                    <div
                        className="w-3 h-3 rounded-full animate-twinkle relative z-10"
                        style={{
                            backgroundColor: ['#C84B4B', '#FFD966', '#F4F4F9'][i % 3],
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${Math.random() * 2 + 1}s`
                        }}
                    >
                        <div className="absolute inset-0 rounded-full blur-sm"
                            style={{
                                backgroundColor: ['#C84B4B', '#FFD966', '#F4F4F9'][i % 3],
                                opacity: 0.4
                            }}
                        ></div>
                    </div>
                </div>
            ))}
        </div>
    </div>
) 