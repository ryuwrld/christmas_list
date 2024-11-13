import { useEffect, useRef, FC } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import type { GiftItem } from '@/types'

interface ModalProps {
    item: GiftItem
    isClosing: boolean
    onClose: () => void
}

export const Modal: FC<ModalProps> = ({ item, isClosing, onClose }) => {
    const modalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [onClose])

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
            <div
                ref={modalRef}
                className={`bg-white/95 border border-white/10 backdrop-blur-md p-6 rounded-xl shadow-2xl 
                    max-w-md w-full mx-4 transform transition-all duration-200
                    ${isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-800 hover:text-gray-600 
                        transition-colors duration-200"
                >
                    <X size={24} />
                </button>

                {/* Content */}
                <div className="flex flex-col items-center gap-4">
                    <Image
                        src={item.image}
                        alt={item.name}
                        width={200}
                        height={200}
                        priority
                        className="object-contain w-48 h-48"
                    />
                    <h2 className="text-2xl font-bold text-gray-800">{item.name}</h2>
                    <p className="text-lg font-semibold text-gray-700">{item.price}</p>
                    <p className="text-gray-600 text-center">{item.description}</p>
                </div>
            </div>
        </div>
    )
} 