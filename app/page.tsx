'use client'

import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { Snowflake } from '@/components/Snowflake'
import { ChristmasLights } from '@/components/ChristmasLights'
import { FlyingSanta } from '@/components/FlyingSanta'
import { Stars } from '@/components/Stars'
import { Aurora } from '@/components/Aurora'
import { giftItems } from '@/data/giftItems'

export default function Page() {
  const [snowflakes, setSnowflakes] = useState([])
  const [selectedItem, setSelectedItem] = useState(null)
  const [isClosing, setIsClosing] = useState(false)
  const [showSanta, setShowSanta] = useState(false);

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
    // Initial delay (3-5 seconds)
    const initialDelay = Math.random() * 2000 + 3000; // 3-5 seconds

    // Function to show Santa
    const showSantaFlight = () => {
      setShowSanta(true);

      // Hide Santa after animation completes
      setTimeout(() => {
        setShowSanta(false);
      }, 4000); // Adjust based on your animation duration
    };

    // Function to schedule next appearance
    const scheduleNextFlight = () => {
      const nextDelay = Math.random() * 3000 + 5000; // 5-8 seconds
      setTimeout(showSantaFlight, nextDelay);
    };

    // Initial appearance
    const initialTimer = setTimeout(() => {
      showSantaFlight();
      scheduleNextFlight();
    }, initialDelay);

    // Set up interval for subsequent appearances
    const flightInterval = setInterval(scheduleNextFlight, 8000);

    // Cleanup
    return () => {
      clearTimeout(initialTimer);
      clearInterval(flightInterval);
    };
  }, []);

  const handleCloseModal = () => {
    setIsClosing(true)
    setTimeout(() => {
      setSelectedItem(null)
      setIsClosing(false)
    }, 200)
  }

  return (
    <div className="h-screen relative overflow-hidden">
      {/* Add Aurora component right after the opening div */}
      <Aurora />
      {/* Moonlight gradient background with darker colors */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#334155] -z-10">
        {/* Full moon with subtle craters */}
        <div className="absolute top-20 right-20 w-24 h-24">
          {/* Outer glow */}
          <div className="absolute inset-0 rounded-full bg-[#F4F4F9]/20 blur-xl"></div>
          {/* Moon base */}
          <div className="absolute inset-0 rounded-full bg-[#F4F4F9]"></div>
          {/* Subtle craters */}
          <div className="absolute inset-0">
            <div className="absolute top-[20%] left-[30%] w-3 h-3 rounded-full bg-[#000]/30"></div>
            <div className="absolute top-[50%] left-[60%] w-2 h-2 rounded-full bg-[#000]/20"></div>
            <div className="absolute top-[70%] left-[40%] w-4 h-4 rounded-full bg-[#000]/25"></div>
            <div className="absolute top-[30%] left-[70%] w-2.5 h-2.5 rounded-full bg-[#000]/30"></div>
          </div>
        </div>
      </div>

      <ChristmasLights />
      {showSanta && <FlyingSanta />}

      {snowflakes.map((snowflake) => (
        <Snowflake key={snowflake.id} style={snowflake} />
      ))}

      <div className="container mx-auto px-4 py-8 h-full">
        <h1 className="text-2xl font-black mb-8 mt-12 text-center text-[#F4F4F9] z-10 lowercase">
          ricardo's christmas wishlist 2024
        </h1>

        <div className="relative w-full h-[calc(100vh-200px)] max-w-7xl mx-auto">
          {giftItems.map((item, index) => (
            <div
              key={index}
              className={`absolute ${item.position} w-36 z-10`}
            >
              <div
                className="rounded-lg overflow-hidden cursor-pointer bg-[#F4F0BB] p-1 
                  transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-2"
                onClick={() => setSelectedItem(index)}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-36 object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Updated Snow footer with Christmas tree */}
      <div className="fixed bottom-0 left-0 right-0 z-10">
        <svg className="w-full h-32" preserveAspectRatio="none" viewBox="0 0 1440 94" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 44C240 94 480 94 720 94C960 94 1200 44 1440 44V94H0V44Z" fill="#F4F4F9" />
          <path d="M0 64C240 94 480 94 720 94C960 94 1200 64 1440 64V94H0V64Z" fill="#F4F4F9" fillOpacity="0.8" />
        </svg>
        <div className="h-16 bg-[#F4F4F9] relative">
          {/* Christmas Tree */}
          <div className="absolute -top-[180%] left-[85%]">
            <img
              src="/images/christmas_tree.gif"
              alt="Christmas Tree"
              className="h-32 w-auto object-contain"
              draggable="false"
            />
          </div>
        </div>
      </div>

      {selectedItem !== null && (
        <div
          className={`fixed inset-0 bg-[#2E4A3E] bg-opacity-95 flex items-center justify-center z-30 p-4 
            ${isClosing ? 'animate-fadeOut' : 'animate-fadeIn'}`}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              handleCloseModal()
            }
          }}
        >
          <div className={`bg-[#F4F4F9] rounded-lg p-6 max-w-md w-full relative 
            ${isClosing ? 'animate-scaleOut' : 'animate-scaleIn'}`}>
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-[#2E4A3E] hover:text-[#C84B4B] transition-colors duration-300"
              aria-label="Close details"
            >
              <X size={24} />
            </button>
            <img
              src={giftItems[selectedItem].image}
              alt={giftItems[selectedItem].name}
              className="w-full h-64 object-contain rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-[#2E4A3E] mb-2 lowercase">
              {giftItems[selectedItem].name}
            </h3>
            <p className="text-xl font-bold text-[#C84B4B] mb-3">
              {giftItems[selectedItem].price}
            </p>
            <p className="text-[#2E4A3E]">
              {giftItems[selectedItem].description}
            </p>
            {/* Added a subtle golden accent for links if they exist in description */}
            <style jsx global>{`
              .text-[#2E4A3E] a {
                color: #FFD966;
                text-decoration: underline;
              }
            `}</style>
          </div>
        </div>
      )}

      <div className="fixed bottom-4 left-4 w-20 h-20 bg-[url('/placeholder.svg?height=100&width=100')] bg-contain bg-no-repeat opacity-50"></div>
      <div className="fixed top-4 right-4 w-20 h-20 bg-[url('/placeholder.svg?height=100&width=300')] bg-contain bg-no-repeat opacity-50 transform rotate-180"></div>

      {/* Hanging Minion */}
      <div className="absolute top-44 right-28 w-8">
        <div className="relative z-50">
          <img
            src="/images/minions.png"
            alt="Hanging Minion"
            className="w-full h-auto object-contain select-none"
            draggable="false"
          />
        </div>
      </div>

      <Stars />
    </div>
  )
}

