import { Button } from "@/components/ui/button";
import React, {ReactNode, useState } from "react";

interface propsT {
  desc: string;
  children: ReactNode;
  onClick: () => void;
}
export default function MenuBtn({ desc, children, onClick }: propsT) {
  const [hover, setHover] = useState(false);
  const handleHover = () => {
    setHover(true);
  };
  const handleLeave = () => {
    setHover(false);
  };

  let clonedChildren :ReactNode;

  // Cloner l'enfant pour ajouter une className
  if (React.isValidElement(children)) {
    clonedChildren = React.cloneElement(children, {className: `w-7 h-7 2xl:w-11 2xl:h-11 ${hover ? "hover:text-[#7BE8D7]" : "text-[#333] dark:text-[#7BE8D7]"}`});
  }
  
  return (
    <div className="relative">
      <Button
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        onClick={() => onClick()}
      >
        {clonedChildren}
      </Button>
      <div
        className={`absolute -top-2 left-[50px] 2xl:left-[70px] z-10 bg-gray-100 dark:bg-gray-300 py-2 px-3 rounded-xl ${
          hover ? "block" : "hidden"
        } `}
      >
        <h2 className="font-light w-full text-[#333] text-sm 2xl:text-xl">{desc}</h2>
      </div>
    </div>
  );
}
