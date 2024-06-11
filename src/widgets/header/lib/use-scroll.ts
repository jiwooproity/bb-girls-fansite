import { RefObject, useEffect, useRef } from 'react';

type ScrollHooksType = () => [RefObject<HTMLDivElement>];

const useScroll: ScrollHooksType = () => {
  const timer = useRef<NodeJS.Timeout>();
  const header = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const changeHeader = () => {
      const current = header.current as HTMLDivElement;
      const scrollTop = document.querySelector('html')?.scrollTop as number;

      timer.current = setTimeout(() => {
        current.style.backgroundColor = scrollTop > 0 ? 'black' : 'transparent';
      }, 100);
    };

    const scrollEvent = () => {
      if (timer.current) {
        clearTimeout(timer.current);
        changeHeader();
      } else {
        changeHeader();
      }
    };

    window.addEventListener('scroll', scrollEvent);
    return () => {
      window.removeEventListener('scroll', scrollEvent);
    };
  }, []);

  return [header];
};

export default useScroll;
