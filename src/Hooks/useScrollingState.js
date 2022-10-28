import { useState, useRef, useEffect } from "react";


const useScrollingState = () => {

    const prevScrollY = useRef(0);

    const [scrolling, setScrolling] = useState(false);
    
    useEffect(() => {
      const handleScrolling = () => {
        const currentScrollY = window.scrollY;
    
        if (prevScrollY.current < currentScrollY && scrolling) {
          setScrolling(false);
        };
    
        if (prevScrollY.current > currentScrollY && !scrolling) {
          setScrolling(true);
        };
    
        prevScrollY.current = currentScrollY;
        console.log(scrolling, currentScrollY);
      };
      window.addEventListener("scroll", handleScrolling, { passive: true });
    
      return () => window.removeEventListener("scroll", handleScrolling);
    
    }, [scrolling]);

    return scrolling;
}

export default useScrollingState;
