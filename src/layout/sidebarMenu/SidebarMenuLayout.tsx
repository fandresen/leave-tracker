import { useNavigate } from "react-router-dom";
import MenuBtn from "./Components/MenuBtn";
import useLogout from "@/features/auth/login/hooks/useLogout";
import { useDispatch } from "react-redux";
import { toggleDarkMode } from "@/redux/themeSlice";
import { BiCalendarExclamation } from "react-icons/bi";
import { IoIosSettings, IoMdHome } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { BsPersonCircle } from "react-icons/bs";
import { LuLogOut } from "react-icons/lu";
import { MdOutlineLightMode } from "react-icons/md";
import RequiredRoleComponent from "@/features/auth/RequiredRoleComponent";

export default function SidebarMenuLayout() {
  const navigate = useNavigate()
  const {logOut} = useLogout()
  const dispatch = useDispatch()
  return (
      <div className="text-2xl fixed min-w-[4vw] bg-[#ffffff] dark:bg-[#747474]">
        <ul className="flex flex-col justify-between h-[100vh]">
          <div className="flex flex-col gap-8 pt-[15vh]">
          <li ><MenuBtn desc="Home" onClick={()=>{navigate("/")}}><IoMdHome/></MenuBtn> </li>
          <RequiredRoleComponent role="USER">  {/*Afficher quand l'utilisateur a le role EMPLOYEE*/}
            <li><MenuBtn desc="Notification" onClick={()=> {}}><IoIosNotifications/></MenuBtn></li>
            <li><MenuBtn desc="Profile" onClick={()=>{navigate("/profile")}}><BsPersonCircle/></MenuBtn></li>
            <li><MenuBtn desc="Demande d'absence" onClick={()=>{navigate("/absence")}}><BiCalendarExclamation/></MenuBtn></li>
          </RequiredRoleComponent>
          <RequiredRoleComponent role="ADMIN">
            <li><MenuBtn desc="Entitys" onClick={()=>{navigate("/entity")}}><BsPersonCircle/></MenuBtn></li>
            <li><MenuBtn desc="Paramètres" onClick={()=>{navigate("/paramètre")}}><IoIosSettings/></MenuBtn></li>
          </RequiredRoleComponent>
          <li><MenuBtn desc="Light Mode"onClick={()=>dispatch(toggleDarkMode())}><MdOutlineLightMode/></MenuBtn></li>
          </div>
          
          
          <li className="mb-[2vh]"><MenuBtn desc="Deconnexion" onClick={()=>logOut()}><LuLogOut/></MenuBtn></li>
        </ul>
      </div>
     
  );
}
