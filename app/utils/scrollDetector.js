import { useEffect, useState } from "react";

export default function ScrollDetector(){
  const [scrolling, setScrolling] = useState(false);
  const [scrollingDown, setScrollingDown] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      setScrollingDown(currentScrollTop > scrollTop);
      setScrollTop(currentScrollTop);
      setScrolling(scrollTop > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollTop]);


  return {scrolling, scrollingDown, scrollTop}
}