import React, { useEffect, useState } from "react";

const AnalogClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = hours * 30 + minutes * 0.5;

  const numbers = [...Array(12)].map((_, i) => i + 1);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 via-gray-900 to-black p-4">
      <div className="relative w-64 sm:w-72 md:w-80 lg:w-96 aspect-square rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl flex items-center justify-center">

        {/* Numbers */}
        {numbers.map((num) => {
          const angle = num * 30;
          return (
            <div
              key={num}
              className="absolute text-white font-semibold text-[0.7rem] sm:text-sm md:text-base lg:text-lg"
              style={{
                transform: `rotate(${angle}deg) translateY(-40%) rotate(-${angle}deg)`
              }}
            >
              {num}
            </div>
          );
        })}

        {/* Hour Hand */}
        <div
          className="absolute bg-white rounded-full origin-bottom shadow-lg"
          style={{
            width: "0.5rem",
            height: "25%",
            left: "50%",
            bottom: "50%",
            transform: `translateX(-50%) rotate(${hourDeg}deg)`
          }}
        />

        {/* Minute Hand */}
        <div
          className="absolute bg-gray-300 rounded-full origin-bottom shadow-md"
          style={{
            width: "0.35rem",
            height: "35%",
            left: "50%",
            bottom: "50%",
            transform: `translateX(-50%) rotate(${minuteDeg}deg)`
          }}
        />

        {/* Second Hand */}
        <div
          className="absolute bg-red-500 rounded-full origin-bottom transition-all duration-500 ease-linear"
          style={{
            width: "0.2rem",
            height: "40%",
            left: "50%",
            bottom: "50%",
            transform: `translateX(-50%) rotate(${secondDeg}deg)`
          }}
        />

        {/* Center Dot */}
        <div className="absolute w-4 h-4 bg-white rounded-full border-2 border-red-500 z-10" />

      </div>
    </div>
  );
};

export default AnalogClock;