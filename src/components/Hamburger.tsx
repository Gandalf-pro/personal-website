import type { Dispatch, SetStateAction } from "react";

export interface HamburgerProps {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

const Hamburger = ({ isVisible, setIsVisible }: HamburgerProps) => {
  const handleClick = () => {
    setIsVisible((val) => !val);
  };

  return (
    <button
      onClick={handleClick}
      className="flex flex-col items-center justify-center text-white"
    >
      <span
        className={`block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out ${
          isVisible ? "translate-y-1 rotate-45" : "-translate-y-0.5"
        }`}
      ></span>
      <span
        className={`my-0.5 block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out ${
          isVisible ? "opacity-0" : "opacity-100"
        }`}
      ></span>
      <span
        className={`block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out ${
          isVisible ? "-translate-y-1 -rotate-45" : "translate-y-0.5"
        }`}
      ></span>
    </button>
  );
};

export default Hamburger;
