import { useNavigate } from "react-router-dom";
import MenuBtn from "./Components/MenuBtn";
import useLogout from "@/features/auth/login/hooks/useLogout";
import RequiredRole from "@/features/auth/RequiredRole";
import { useDispatch } from "react-redux";
import { toggleDarkMode } from "@/redux/themeSlice";
import { BiCalendarExclamation } from "react-icons/bi";
import { IoMdHome } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { BsPersonCircle } from "react-icons/bs";
import { LuLogOut } from "react-icons/lu";
import { MdOutlineLightMode } from "react-icons/md";

export default function SidebarMenuLayout() {
  const navigate = useNavigate()
  const {logOut} = useLogout()
  const dispatch = useDispatch()
  return (
      <div className="text-2xl min-w-[4vw] bg-[#ffffff] dark:bg-[#747474] border-r-2 border-[#33333315] relative">
        <ul className="flex flex-col h-[100vh] gap-8 pt-[15vh]">
          <li ><MenuBtn desc="Home" onClick={()=>{navigate("/")}}><IoMdHome/></MenuBtn> </li>
          <RequiredRole role="EMPLOYEE">  {/*Afficher quand l'utilisateur a le role EMPLOYEE*/}
            <li><MenuBtn desc="Notification"><IoIosNotifications/></MenuBtn></li>
            <li><MenuBtn desc="Profile" onClick={()=>{navigate("/profile")}}><BsPersonCircle/></MenuBtn></li>
            <li><MenuBtn desc="Demande d'absence" onClick={()=>{navigate("/absence")}}><BiCalendarExclamation/></MenuBtn></li>
          </RequiredRole>
          <li><MenuBtn desc="Light Mode"onClick={()=>dispatch(toggleDarkMode())}><MdOutlineLightMode/></MenuBtn></li>
          
          <li className="absolute bottom-6"><MenuBtn desc="Deconnexion" onClick={()=>logOut()}><LuLogOut/></MenuBtn></li>
        </ul>
      </div>
     
  );
}
