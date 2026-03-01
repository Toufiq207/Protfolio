import React, { useEffect, useState } from "react";

const AnalogClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 via-gray-900 to-black ">
      <div className="relative w-80 h-80 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl flex items-center justify-center">

        {/* Numbers */}
        {numbers.map((num) => {
          const angle = num * 30;
          return (
            <div
              key={num}
              className="absolute text-white font-semibold"
              style={{
                transform: `rotate(${angle}deg) translateY(-130px) rotate(-${angle}deg)`
              }}
            >
              {num}
            </div>
          );
        })}

       {/* Hour */}
<div
  className="absolute w-2 h-20 bg-white rounded-full origin-bottom shadow-lg"
  style={{ left: "50%", bottom: "50%", transform: `translateX(-50%) rotate(${hourDeg}deg)` }}
/>

{/* Minute */}
<div
  className="absolute w-1.5 h-28 bg-gray-300 rounded-full origin-bottom shadow-md"
  style={{ left: "50%", bottom: "50%", transform: `translateX(-50%) rotate(${minuteDeg}deg)` }}
/>

{/* Second */}
<div
  className="absolute w-1 h-32 bg-red-500 rounded-full origin-bottom transition-all duration-500 ease-linear"
  style={{ left: "50%", bottom: "50%", transform: `translateX(-50%) rotate(${secondDeg}deg)` }}
/>
      </div>
    </div>
  );
};

export default AnalogClock;