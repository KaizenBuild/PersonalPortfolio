import React, { useState, useEffect } from 'react';

const TextAnimation = () => {
  const [text, setText] = useState('');
  const fullText = 'I am a Developer....';

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex < fullText.length) {
        setText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 150); // Adjust the speed by changing the interval (in milliseconds)

    return () => clearInterval(intervalId);
  }, [fullText]);

  return (
    <div className="flex items-center justify-center">
      <h1 className="text-[24px] font-bold text-[#EB5365]">
        {text}
        <span className="animate-blink">.</span>
      </h1>
    </div>
  );
};

export default TextAnimation;