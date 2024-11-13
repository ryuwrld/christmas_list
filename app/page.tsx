'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Snowflake } from '@/components/Snowflake'
import { ChristmasLights } from '@/components/ChristmasLights'
import { FlyingSanta } from '@/components/FlyingSanta'
import { Stars } from '@/components/Stars'
import { Aurora } from '@/components/Aurora'
import { Moon } from '@/components/Moon'
import { giftItems } from '@/data/giftItems'
import type { SnowflakeStyle } from '@/types'
import { Modal } from '@/components/Modal'
import { AudioPlayer } from '@/components/AudioPlayer'
import { GiftEffect } from '@/components/GiftEffect'

export default function Page() {
  const [snowflakes, setSnowflakes] = useState<SnowflakeStyle[]>([])
  const [selectedItem, setSelectedItem] = useState<number | null>(null)
  const [isClosing, setIsClosing] = useState<boolean>(false)
  const [showSanta, setShowSanta] = useState<boolean>(false)

  useEffect(() => {
    setSnowflakes(
      [...Array(100)].map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 5 + 5}s`,
        opacity: Math.random(),
        fontSize: `${Math.random() * 10 + 12}px`
      }))
    )
  }, [])

  useEffect(() => {
    const initialDelay = Math.random() * 2000 + 3000

    const showSantaFlight = () => {
      setShowSanta(true)
      setTimeout(() => {
        setShowSanta(false)
      }, 4000)
    }

    const scheduleNextFlight = () => {
      const nextDelay = Math.random() * 3000 + 5000
      setTimeout(showSantaFlight, nextDelay)
    }

    const initialTimer = setTimeout(() => {
      showSantaFlight()
      scheduleNextFlight()
    }, initialDelay)

    const flightInterval = setInterval(scheduleNextFlight, 8000)

    return () => {
      clearTimeout(initialTimer)
      clearInterval(flightInterval)
    }
  }, [])

  const handleCloseModal = () => {
    setIsClosing(true)
    setTimeout(() => {
      setSelectedItem(null)
      setIsClosing(false)
    }, 200)
  }

  return (
    <div className="h-screen relative overflow-hidden">
      <Aurora />
      <Stars />
      <ChristmasLights />
      {showSanta && <FlyingSanta />}
      <Moon />
      <AudioPlayer />

      <div className="fixed inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#334155] -z-10" />

      {/* Snowflakes */}
      {snowflakes.map((snowflake) => (
        <Snowflake key={snowflake.id} style={snowflake} />
      ))}

      {/* Gift Items Container */}
      <div className="absolute inset-0 pt-20 pb-32">
        {giftItems.map((item, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              left: item.position.x,
              top: item.position.y,
              transform: `rotate(${item.position.rotate}deg)`
            }}
            className="cursor-pointer transition-all duration-300 hover:scale-110 group"
            onClick={() => setSelectedItem(index)}
          >
            <div className="relative p-3 rounded-lg bg-white/75 backdrop-blur-sm 
                border border-white/10
                group-hover:bg-white/70 transition-all duration-300 
                shadow-lg hover:shadow-xl">
              <Image
                src={item.image}
                alt={item.name}
                width={96}
                height={96}
                priority
                className="object-contain w-24 h-24 transition-transform duration-300"
                draggable={false}
              />
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent 
                  rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              </div>
            </div>
            <GiftEffect />
          </div>
        ))}
      </div>

      {/* Snow footer with Christmas tree and cats */}
      <div className="fixed bottom-0 left-0 right-0 z-10">
        <svg className="w-full h-32" preserveAspectRatio="none" viewBox="0 0 1440 94" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 44C240 94 480 94 720 94C960 94 1200 44 1440 44V94H0V44Z" fill="#F4F4F9" />
          <path d="M0 64C240 94 480 94 720 94C960 94 1200 64 1440 64V94H0V64Z" fill="#F4F4F9" fillOpacity="0.8" />
        </svg>
        <div className="h-16 bg-[#F4F4F9] relative">
          {/* Cat 1 - Left of tree */}
          <div className="absolute -top-[15px] left-[calc(62%-110px)]">
            <Image
              src="/images/cat1.gif"
              alt="Cat 1"
              width={36}
              height={36}
              priority
              className="object-contain"
            />
          </div>

          {/* Christmas Tree */}
          <div className="absolute -top-20 left-1/2 transform -translate-x-1/2">
            <Image
              src="/images/christmas_tree.gif"
              alt="Christmas Tree"
              width={128}
              height={128}
              priority
              className="object-contain"
            />
          </div>

          {/* Cat 2 - Right of tree */}
          <div className="absolute -top-[10px] left-[calc(56%-55px)]">
            <Image
              src="/images/cat2.gif"
              alt="Cat 2"
              width={48}
              height={48}
              priority
              className="object-contain"
            />
          </div>

          {/* Cat 3 - Under tree */}
          <div className="absolute -top-[10px] left-[calc(50%-100px)]">
            <Image
              src="/images/cat3.gif"
              alt="Cat 3"
              width={36}
              height={36}
              priority
              className="object-contain"
            />
          </div>

          {/* Snoopy Snowman */}
          <div className="absolute -top-[50px] left-[calc(50%-200px)]">
            <Image
              src="/images/snoopy_snowman.png"
              alt="Snoopy Snowman"
              width={96}
              height={96}
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedItem !== null && (
        <Modal
          item={giftItems[selectedItem]}
          isClosing={isClosing}
          onClose={handleCloseModal}
        />
      )}
    </div>
  )
}

