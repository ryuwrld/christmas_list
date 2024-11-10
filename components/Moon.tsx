import Image from 'next/image'

export const Moon = () => {
    return (
        <>
            {/* Moon */}
            <div className="fixed top-8 right-8 pointer-events-none">
                <div className="w-20 h-20 rounded-full bg-[#F4F4F9] relative shadow-lg">
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-full bg-[#F4F4F9]/25 blur-xl" />

                    {/* Craters */}
                    <div className="absolute top-4 left-5 w-3 h-3 rounded-full bg-[#000]/20" />
                    <div className="absolute top-8 right-4 w-4 h-4 rounded-full bg-[#000]/20" />
                    <div className="absolute bottom-5 left-8 w-3 h-3 rounded-full bg-[#000]/20" />

                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent to-[#334155]/20" />
                </div>
            </div>

            {/* Hanging Minion */}
            <div className="fixed top-[11%] right-14 cursor-pointer group">
                <Image
                    src="/images/minions.png"
                    alt="Hanging Minion"
                    width={32}
                    height={32}
                    priority
                    className="w-8 h-auto hover:scale-110 transition-transform duration-200"
                />
            </div>
        </>
    );
}; 