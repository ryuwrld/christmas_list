import { useState, useEffect, useRef } from 'react'
import { Volume2, VolumeX, Play, Pause, SkipForward } from 'lucide-react'

const SONGS = [
    '/sounds/beginning.mp3',
    '/sounds/jingle_bells.mp3',
    '/sounds/let_it_snow.mp3',
    '/sounds/santa_baby.mp3',
    '/sounds/rockin.mp3'
]

export const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [volume, setVolume] = useState(0.15)
    const [currentSongIndex, setCurrentSongIndex] = useState(0)
    const [isMuted, setIsMuted] = useState(false)
    const audioRef = useRef<HTMLAudioElement | null>(null)

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume
        }
    }, [volume])

    useEffect(() => {
        const audio = audioRef.current
        if (!audio) return

        const handleSongEnd = () => {
            setCurrentSongIndex((prev) => (prev + 1) % SONGS.length)
        }

        audio.addEventListener('ended', handleSongEnd)
        return () => audio.removeEventListener('ended', handleSongEnd)
    }, [])

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause()
            } else {
                audioRef.current.play().catch(console.error)
            }
            setIsPlaying(!isPlaying)
        }
    }

    const toggleMute = () => {
        if (audioRef.current) {
            audioRef.current.muted = !isMuted
            setIsMuted(!isMuted)
        }
    }

    const nextSong = () => {
        setCurrentSongIndex((prev) => (prev + 1) % SONGS.length)
        if (isPlaying && audioRef.current) {
            audioRef.current.play().catch(console.error)
        }
    }

    return (
        <div className="fixed bottom-4 right-4 z-50 bg-white/75 backdrop-blur-md rounded-lg p-3 
            shadow-lg flex items-center gap-3 transition-all duration-300 hover:bg-white/70
            border border-white/10">
            {/* Hidden Audio Element */}
            <audio
                ref={audioRef}
                src={SONGS[currentSongIndex]}
                autoPlay
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            />

            {/* Play/Pause Button */}
            <button
                onClick={togglePlay}
                className="text-gray-800 hover:text-gray-600 transition-colors cursor-pointer"
            >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>

            {/* Next Song Button */}
            <button
                onClick={nextSong}
                className="text-gray-800 hover:text-gray-600 transition-colors cursor-pointer"
            >
                <SkipForward size={20} />
            </button>

            {/* Volume Controls */}
            <button
                onClick={toggleMute}
                className="text-gray-800 hover:text-gray-600 transition-colors cursor-pointer"
            >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>

            {/* Volume Slider */}
            <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={isMuted ? 0 : volume}
                onChange={(e) => {
                    const newVolume = parseFloat(e.target.value)
                    setVolume(newVolume)
                    if (audioRef.current) {
                        audioRef.current.volume = newVolume
                        if (newVolume > 0 && isMuted) {
                            setIsMuted(false)
                            audioRef.current.muted = false
                        }
                    }
                }}
                className="w-20 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer
                    [&::-webkit-slider-thumb]:appearance-none 
                    [&::-webkit-slider-thumb]:w-2 
                    [&::-webkit-slider-thumb]:h-2 
                    [&::-webkit-slider-thumb]:rounded-full 
                    [&::-webkit-slider-thumb]:bg-gray-800
                    hover:[&::-webkit-slider-thumb]:bg-gray-600
                    transition-colors"
            />
        </div>
    )
} 