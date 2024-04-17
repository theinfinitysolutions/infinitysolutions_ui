import { useState, useEffect, useRef } from "react";

const useIntersect = (ref) => {
  const [isOnScreen, setIsOnScreen] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        setIsOnScreen(entry.isIntersecting);
      },
      {
        threshold: 0.5,
        rootMargin: "0px",
        root: null,
      }
    );
  }, []);

  useEffect(() => {
    observerRef.current.observe(ref.current);
    return () => observerRef.current.disconnect();
  }, [ref.current]);

  return isOnScreen;
};

export default useIntersect;
