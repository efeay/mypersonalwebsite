import React from 'react';

interface TypewriterProps {
  words: string[];
  speed?: number;
  pause?: number;
}

export const Typewriter: React.FC<TypewriterProps> = ({ words, speed = 150, pause = 1000 }) => {
  const [text, setText] = React.useState('');
  const [wordIndex, setWordIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (text.length < currentWord.length) {
        timeout = setTimeout(() => setText(currentWord.slice(0, text.length + 1)), speed);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), pause);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(currentWord.slice(0, text.length - 1)), speed / 2);
      } else {
        setIsDeleting(false);
        setWordIndex(prev => prev + 1);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, speed, pause]);

  return (
    <span className="text-xl md:text-2xl font-medium text-muted-foreground">
      {text}
      <span className="animate-pulse text-primary">|</span>
    </span>
  );
};