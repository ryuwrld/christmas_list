import { X } from 'lucide-react'
import Image from 'next/image'
import { GiftItem } from '@/types'

interface ModalProps {
    item: GiftItem
    isClosing: boolean
    onClose: () => void
}

export const Modal = ({ item, isClosing, onClose }: ModalProps) => {
    return (
        <div
            className={`fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 ${isClosing ? 'animate-fadeOut' : 'animate-fadeIn'
                }`}
            onClick={onClose}
        >
            <div
                className={`bg-white p-6 rounded-lg shadow-xl max-w-md w-full relative ${isClosing ? 'animate-scaleOut' : 'animate-scaleIn'
                    }`}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                >
                    <X size={24} />
                </button>

                <div className="flex justify-center mb-4">
                    <Image
                        src={item.image}
                        alt={item.name}
                        width={150}
                        height={150}
                        priority
                        className="object-contain"
                    />
                </div>

                <h3 className="text-2xl font-bold text-[#2E4A3E] mb-2 lowercase">
                    {item.name}
                </h3>
                <p className="text-xl font-bold text-[#C84B4B] mb-3">
                    {item.price}
                </p>
                <p className="text-[#2E4A3E]">
                    {item.description}
                </p>
            </div>
        </div>
    )
} 