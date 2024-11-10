export const Aurora = () => {
    return (
        <div className="fixed inset-0 overflow-hidden -z-5 opacity-30">
            <div className="absolute w-[150%] h-[150%] top-1/2 left-1/2 animate-aurora">
                <div className="absolute w-full h-full animate-auroraMove">
                    <div className="absolute inset-0 blur-3xl">
                        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-teal-300/25"></div>
                        <div className="absolute top-1/3 left-1/3 w-1/2 h-1/2 rounded-full bg-purple-300/25"></div>
                        <div className="absolute top-1/2 left-1/2 w-1/2 h-1/2 rounded-full bg-blue-300/25"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}; 