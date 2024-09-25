import ProfilAvatar from "@/components/ProfilAvatar";
import { IoIosSettings } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { MdOutlineDarkMode,} from "react-icons/md";
import { useDispatch } from "react-redux";
import { toggleDarkMode } from "@/redux/themeSlice";
import { LuLogOut } from "react-icons/lu";
import useLogout from "@/features/auth/login/hooks/useLogout";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

interface propsT {
  firstName: string;
  lastName: string;
}
export default function ProfilModal({ firstName, lastName }: propsT) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { logOut } = useLogout();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex gap-2 cursor-pointer">
          <ProfilAvatar url="https://github.com/shadcn.png" className="w-10" />
          <h1 className="2xl:text-md text-gray-500 dark:text-gray-400 font-semibold mt-1">
            Fandresena
          </h1>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white lg:w-[22vw] 2xl:w-[18vw] lg:mr-5 lg:pl-7 2xl:pl-10 rounded-2xl lg:pt-5 lg:pb-8 2xl:py-8 lg:px-5 shadow-2xl border border-gray-200">
        <DropdownMenuLabel>
          <div className="flex flex-col items-center gap-2">
            <ProfilAvatar
              url="https://github.com/shadcn.png"
              className="w-14 h-14"
            />
            <h1 className="2xl:text-xl text-gray-500 font-semibold">
              {firstName} {lastName}
            </h1>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-gray-300 h-[2px] lg:mt-4 2xl:mt-5"/>
        <DropdownMenuItem
          className="flex lg:gap-2 lg:mt-5 hover:bg-gray-200 lg:py-2 2xl:py-3 lg:pl-2 rounded-xl outline-none cursor-pointer"
          onClick={() => {
            navigate("/paramètre");
          }}
        >
          <IoIosSettings size={30}/>
          <span className="2xl:text-lg 2xl:-mt-[2px]">Parametre</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex lg:gap-2 lg:mt-2 hover:bg-gray-200 lg:py-2 2xl:py-3 lg:pl-2 rounded-xl outline-none cursor-pointer"
          onClick={() => dispatch(toggleDarkMode())}
        >
          <MdOutlineDarkMode size={30}/>
          <span className="2xl:text-lg 2xl:-mt-[2px]">Mode Sombre</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex lg:gap-2 lg:mt-2 hover:bg-gray-200 lg:py-2 2xl:py-3 lg:pl-2 rounded-xl outline-none cursor-pointer" onClick={() => logOut()}>
          <LuLogOut size={30}/>
          <span className="2xl:text-lg 2xl:-mt-[2px]">Deconnexion</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
