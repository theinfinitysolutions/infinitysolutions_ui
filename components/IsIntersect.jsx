import { useState, useEffect, useRef } from "react";

const useIntersect = (ref, threshold) => {
  const [isOnScreen, setIsOnScreen] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        setIsOnScreen(entry.isIntersecting);
      },
      {
        threshold: threshold || 0.5,
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
