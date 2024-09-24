import Notification from "@/components/Notification";
import ProfilAvatar from "@/components/ProfilAvatar";

export default function Header() {
  return (
    <>
      <div className="flex px-3 pt-[1vh] pb-3 justify-between fixed w-full left-0 bg-white dark:bg-transparent">
        <img src="src/assets/ZenRH.png" className="w-[10vw]" />
        <div className="flex 2xl:gap-16 2xl:mr-10 2xl:mt-4">
         <Notification className="w-7 h-7"/>
          
          <div className="flex justify-between 2xl:gap-3 2xl:-mt-1">
            <ProfilAvatar url="https://github.com/shadcn.png" className="w-10"/>
            <h1 className="2xl:text-md text-gray-500 dark:text-gray-400 font-semibold mt-1">
              Fandresena
            </h1>
          </div>
        </div>
      </div>
      <div className="2xl:h-28"></div>
    </>
  );
}
