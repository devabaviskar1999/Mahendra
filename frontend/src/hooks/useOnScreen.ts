import { useState, useEffect, RefObject } from "react";

export default function useOnScreen(
  ref: RefObject<HTMLElement | null>,
  threshold = 0.1
) {
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasBeenVisible) {
          setHasBeenVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref, threshold, hasBeenVisible]);

  return hasBeenVisible;
}
