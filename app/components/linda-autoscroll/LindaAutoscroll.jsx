import { useState, useEffect } from 'react';
import { Button } from "@mui/material";

function LindaAutoscroll() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPosition = window.scrollY;

    if (documentHeight - scrollPosition > windowHeight + 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Button
      onClick={scrollToBottom}
      style={{
        display: isVisible ? 'block' : 'none',
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000,
        padding: '10px',
        cursor: 'pointer',
        border: "2px solid black",
      }}
    >
      Scroll Down
    </Button>
  );
}

export default LindaAutoscroll;
