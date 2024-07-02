

import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";

interface propsT{
    children: React.ReactNode;
}

export const AnimatedGridPatternDemo = ({children}:propsT) => {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-background z-20">
     {children}
      <AnimatedGridPattern
        numSquares={200}
        maxOpacity={0.5}
        duration={2}
        height={30}
        repeatDelay={1}
        className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-10 inset-y-[-50%] h-[200%] skew-y-12",
            "z-0"
          )}
      />
    </div>
  );
};

