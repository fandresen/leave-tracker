import ProfilModal from "./ProfilModal";
import NotificationModal from "./NotificationModal";
import { getUserName } from "@/lib/token&RoleService";

export default function Header() {
  const userName = getUserName();
  console.log(userName);
  return (
    <>
      <div className="flex px-3 pt-[1vh] pb-3 justify-between fixed w-full left-0 bg-white dark:bg-transparent z-50">
        <img src="/src/assets/ZenRH.png" className="w-[10vw]" />
        <div className="flex lg:gap-16 2xl:gap-16 lg:mr-8 2xl:mr-10 lg:mt-2 2xl:mt-4">
        <NotificationModal/>

          <div className="flex justify-between lg:gap-2 2xl:gap-3 lg:-mt-1">
            <ProfilModal lastName={userName}/>
          </div>
        </div>
      </div>
      <div className="lg:h-24 2xl:h-28"></div>
    </>
  );
}
