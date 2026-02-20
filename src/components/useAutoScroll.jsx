import { useRef, useEffect } from 'react'

export function useAutoScroll(dependencies) {
  const conatinerRef = useRef(null);

  useEffect(() => {
    const containerElem = conatinerRef.current;
    if(containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [dependencies]);
  return conatinerRef;
}