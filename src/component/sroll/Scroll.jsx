import React, { useState, useEffect } from 'react';
import "../sroll/scroll.css";

export default function Scroll() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className={`button-to-top ${isVisible ? 'show' : 'hide'}`}>
      <button onClick={scrollToTop}>
        <span className="scroll-text"><strong><i class="fa-solid fa-arrow-up-long"></i></strong></span>
      </button>
    </div>
  );
}
