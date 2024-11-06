'use client'

import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

const Snowflake = ({ style }) => (
  <div
    className="absolute text-white text-opacity-80 will-change-transform animate-fall"
    style={style}
  >
    ❄
  </div>
)

const ChristmasLights = () => (
  <div className="fixed top-0 left-0 right-0 z-10">
    {/* Wire */}
    <div className="h-1 w-full bg-gradient-to-b from-[#2C3E50] to-[#34495E] rounded-full"></div>

    {/* Lights container with relative positioning */}
    <div className="flex justify-around relative -mt-1.5">
      {[...Array(20)].map((_, i) => (
        <div key={`light-${i}`} className="relative">
          {/* Wire to next light */}
          <div className="absolute top-1.5 h-0.5 bg-[#2C3E50] w-full"></div>
          {/* Light bulb */}
          <div
            className="w-3 h-3 rounded-full animate-twinkle relative z-10"
            style={{
              backgroundColor: ['#C84B4B', '#FFD966', '#F4F4F9'][i % 3],
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 1}s`
            }}
          >
            {/* Light glow effect */}
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

// Add Santa animation component with random vertical position
const FlyingSanta = () => {
  const randomTop = Math.floor(Math.random() * 30) + 20; // Random value between 20-50%

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

const giftItems = [
  {
    name: "uniqlo half-zip",
    price: "£34.90",
    description: "normal or soufflé - darkish color - code: 475381 / 469473",
    image: "/images/halfzip.png",
    position: "top-[15%] left-[10%] rotate-[-5deg]"
  },
  {
    name: "uniqlo pleated pants",
    price: "£34.90",
    description: "womens* - beige - code: 473638",
    image: "/images/pleated.png",
    position: "bottom-[75%] right-[20%] rotate-[3deg]"
  },
  {
    name: "screwdriver set",
    price: "£8.50",
    description: "https://www.aliexpress.com/item/1005006380671078.html",
    image: "/images/screwdriver.png",
    position: "top-[20%] left-[30%] rotate-[1deg]"
  },
  {
    name: "uniqlo sweatpants",
    price: "£29.90",
    description: "grey - code: 469934",
    image: "/images/sweatpants.png",
    position: "top-[35%] right-[25%] rotate-[6deg]"
  },
  {
    name: "philips oneblade",
    price: "£39.99",
    description: "cheaper on black friday - https://www.amazon.co.uk/Philips-OneBlade-Original-Hybrid-Face/dp/B0CG6WXFCH",
    image: "/images/oneblade.png",
    position: "bottom-[20%] left-[20%] rotate-[4deg]"
  },
  {
    name: "uniqlo crew neck t shirt (U)",
    price: "£14.90",
    description: "CODE: 475356 - a nice t shirt (NOT THE AIRISM, that one shrinks alot apparently) you can choose color",
    image: "/images/tshirt.png",
    position: "bottom-[50%] right-[5%] rotate-[-6deg]"
  },
  {
    name: "slippers",
    price: "£7.99",
    description: "from amazon or something",
    image: "/images/slippers.png",
    position: "bottom-[15%] right-[30%] rotate-[-5deg]"
  },
  {
    name: "a perfume",
    price: "TBA",
    description: "if you decide to buy me one, pick at most 70ml (doesn't have to be expensive, zara has some nice ones)",
    image: "/images/perfume.png",
    position: "bottom-[30%] left-[40%] rotate-[2deg]"
  },
  {
    name: "whey protein",
    price: "£19.90",
    description: "this one is a good deal right now on amazon, 1kg chocolate flavour",
    image: "/images/whey.png",
    position: "bottom-[30%] left-[0%] rotate-[-5deg]"
  },
  {
    name: "birkenstock arizona",
    price: "£59.90**",
    description: "ONLY get them at a decent price (below 70 80), size 9.5 uk, dark brown color",
    image: "/images/birks.png",
    position: "bottom-[70%] left-[50%] rotate-[2deg]"
  },
  {
    name: "adidas gazelles",
    price: "£89.90**",
    description: "ONLY get them if they're cheaper than that price, size 9.5 uk, dark colored ones similar to this picture",
    image: "/images/gazelles.png",
    position: "top-[60%] right-[10%] rotate-[-3deg]"
  }
]

// Static stars - no regeneration, just twinkling
const Stars = () => {
  // Static array of star positions with varying sizes
  const staticStars = [
    // North Star - biggest and brightest
    { top: '15%', left: '25%', size: 5 },
    // Regular stars with random sizes between 1-3px
    { top: '10%', left: '15%', size: 1.5 }, { top: '25%', left: '30%', size: 2 },
    { top: '15%', left: '45%', size: 1 }, { top: '8%', left: '60%', size: 2.5 },
    { top: '20%', left: '75%', size: 1 }, { top: '30%', left: '85%', size: 2 },
    { top: '35%', left: '20%', size: 1.5 }, { top: '40%', left: '40%', size: 1 },
    { top: '45%', left: '65%', size: 2 }, { top: '50%', left: '80%', size: 1.5 },
    { top: '5%', left: '90%', size: 1 }, { top: '28%', left: '95%', size: 2.5 },
    { top: '33%', left: '5%', size: 1.5 }, { top: '48%', left: '15%', size: 1 },
    { top: '55%', left: '35%', size: 2 }, { top: '60%', left: '55%', size: 1.5 },
    { top: '65%', left: '70%', size: 1 }, { top: '18%', left: '82%', size: 2 },
    { top: '22%', left: '8%', size: 1.5 }, { top: '38%', left: '25%', size: 1 },
    { top: '12%', left: '38%', size: 2 }, { top: '42%', left: '72%', size: 1.5 },
    { top: '28%', left: '58%', size: 1 }, { top: '52%', left: '42%', size: 2 },
    // Additional stars
    { top: '7%', left: '22%', size: 1.5 }, { top: '32%', left: '88%', size: 2 },
    { top: '18%', left: '52%', size: 1 }, { top: '13%', left: '68%', size: 2.5 },
    { top: '25%', left: '78%', size: 1 }, { top: '37%', left: '92%', size: 2 },
    { top: '42%', left: '12%', size: 1.5 }, { top: '48%', left: '45%', size: 1 },
    { top: '53%', left: '62%', size: 2 }, { top: '58%', left: '85%', size: 1.5 },
    { top: '8%', left: '95%', size: 1 }, { top: '23%', left: '98%', size: 2.5 },
    { top: '38%', left: '2%', size: 1.5 }, { top: '45%', left: '18%', size: 1 },
    { top: '62%', left: '32%', size: 2 }, { top: '57%', left: '58%', size: 1.5 },
    { top: '68%', left: '75%', size: 1 }, { top: '15%', left: '85%', size: 2 },
    { top: '27%', left: '3%', size: 1.5 }, { top: '35%', left: '28%', size: 1 },
    { top: '17%', left: '33%', size: 2 }, { top: '47%', left: '77%', size: 1.5 },
    { top: '33%', left: '53%', size: 1 }, { top: '55%', left: '47%', size: 2 }
  ];

  return (
    <div className="fixed inset-0 -z-5">
      {staticStars.map((star, index) => (
        <div
          key={index}
          className={`absolute rounded-full bg-[#F4F4F9] ${star.size === 4 ? 'animate-northStar' : 'animate-starTwinkle'}`}
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: star.top,
            left: star.left,
            animationDelay: `${index * 0.1}s`,
            filter: `blur(${star.size === 4 ? '1px' : '0.5px'})`
          }}
        >
          <div
            className="absolute inset-0 rounded-full bg-[#F4F4F9]/20 blur-sm"
            style={{
              transform: `scale(${star.size === 4 ? 1.5 : 1})`
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default function Page() {
  const [snowflakes, setSnowflakes] = useState([])
  const [selectedItem, setSelectedItem] = useState(null)
  const [isClosing, setIsClosing] = useState(false)
  const [showSanta, setShowSanta] = useState(false);
  const [audioReady, setAudioReady] = useState(false);
  const [audio] = useState<HTMLAudioElement | null>(() => {
    if (typeof window !== 'undefined') {
      const audioElement = new Audio('/sounds/bello.mp3');
      audioElement.preload = 'auto';
      audioElement.setAttribute('playsinline', '');
      audioElement.volume = 1.0;
      return audioElement;
    }
    return null;
  });

  useEffect(() => {
    if (audio) {
      audio.addEventListener('canplaythrough', () => setAudioReady(true));
      return () => {
        audio.removeEventListener('canplaythrough', () => setAudioReady(true));
      };
    }
  }, [audio]);

  useEffect(() => {
    setSnowflakes(
      [...Array(50)].map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 3 + 2}s`,
        opacity: Math.random(),
        fontSize: `${Math.random() * 10 + 10}px`
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

  const handleMinionClick = () => {
    if (audio) {
      console.log('Minion clicked, attempting to play audio');

      audio.pause();
      audio.currentTime = 0;

      const playPromise = audio.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('Audio played successfully');
          })
          .catch((error) => {
            console.error('Playback failed:', error);
            alert('Audio playback failed. This might be due to browser restrictions on localhost.');
          });
      }
    }
  };

  return (
    <div className="h-screen relative overflow-hidden">
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

        {/* Hanging Minion */}
        <div className="absolute top-44 right-28 w-8">
          <div className="relative z-50 cursor-pointer">
            <img
              src="/images/minions.png"
              alt="Hanging Minion"
              className="w-full h-auto object-contain hover:scale-110 transition-transform duration-200 select-none"
              onClick={handleMinionClick}
              draggable="false"
            />
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

      {/* Updated Snow footer without the Christmas tree */}
      <div className="fixed bottom-0 left-0 right-0 z-10">
        <svg className="w-full h-32" preserveAspectRatio="none" viewBox="0 0 1440 94" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 44C240 94 480 94 720 94C960 94 1200 44 1440 44V94H0V44Z" fill="#F4F4F9" />
          <path d="M0 64C240 94 480 94 720 94C960 94 1200 64 1440 64V94H0V64Z" fill="#F4F4F9" fillOpacity="0.8" />
        </svg>
        <div className="h-16 bg-[#F4F4F9] relative">
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
            <p className="text-[#2E4A3E] lowercase">
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

      <Stars /> {/* Add the Stars component here */}
    </div>
  )
}

