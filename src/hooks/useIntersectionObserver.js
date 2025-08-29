import { useEffect, useState, useRef } from 'react';

export function useIntersectionObserver({
  root = null,
  rootMargin = '0px',
  threshold = 0.1,
  freezeOnceVisible = true,
} = {}) {
  const [entry, setEntry] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  const frozen = useRef(false);

  const updateEntry = ([observerEntry]) => {
    setEntry(observerEntry);

    const isIntersecting = observerEntry.isIntersecting;

    if (isIntersecting) {
      setIsVisible(true);

      if (freezeOnceVisible) {
        frozen.current = true;
      }
    } else if (!freezeOnceVisible) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    const node = elementRef.current;
    if (!node || frozen.current) return undefined;

    const observer = new IntersectionObserver(updateEntry, {
      root,
      rootMargin,
      threshold,
    });

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [root, rootMargin, threshold, freezeOnceVisible]);

  return { ref: elementRef, entry, isVisible };
}