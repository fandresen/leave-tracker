import { Button } from "@/components/ui/button";
import { useState } from "react";

interface propsT {
  desc: string;
  icon: string;
  onClick: ()=>void;
}
export default function MenuBtn({ desc, icon,onClick}: propsT) {
  const [hover, setHover] = useState(false);
  const handleHover = () => {
    setHover(true)
  }
  const handleLeave = () => {
    setHover(false)
  }
  return (
    <div className="relative">
      <Button onMouseEnter={handleHover} onMouseLeave={handleLeave} onClick={()=>onClick()}>
        <img src={icon} className="text-red-600 w-10 h-10" />
      </Button>
      <div
        className={`absolute -top-2 left-[70px] z-10 bg-gray-50 py-2 px-3 rounded-xl ${
          hover ? "block" : "hidden"
        } `}
      >
        <h2 className="font-light w-full text-[#333]">{desc}</h2>
      </div>
    </div>
  );
}
