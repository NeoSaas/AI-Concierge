import React, { useState, useEffect } from 'react';

const TypingWords = ({ words, typingSpeed = 100, pauseTime = 3000 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    const wordLength = word.length;

    const typingInterval = setInterval(() => {
      if (!isDeleting) {
        //typing
        setCurrentWord((prevWord) =>
          prevWord.length === wordLength ? prevWord : word.slice(0, prevWord.length + 1)
        );

        if (currentWord === word) {
          //finished typing start deleting after pauseTime
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        //deleting
        setCurrentWord((prevWord) => (prevWord.length === 0 ? '' : prevWord.slice(0, -1)));

        if (currentWord === '') {
            //finished deleting move to the next word
            setIsDeleting(false);
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);

        }
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [currentWord, currentWordIndex, isDeleting, words, typingSpeed, pauseTime]);

  return <span>{currentWord}|</span>;
};

export default TypingWords;


