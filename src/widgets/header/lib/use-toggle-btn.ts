import { RefObject, useRef } from 'react';

type ToggleBtnType = () => [RefObject<HTMLImageElement>, () => void];

const useToggleBtn: ToggleBtnType = () => {
  const toggleRef = useRef<HTMLImageElement>(null);

  const toggle = () => {
    const current = toggleRef.current as HTMLImageElement;
    const isClose = current.classList.contains('close');
    current.src = `/svgs/${isClose ? 'hamburger' : 'close'}.svg`;
    current.classList[isClose ? 'remove' : 'add']('close');
  };

  return [toggleRef, toggle];
};

export default useToggleBtn;
