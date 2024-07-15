import { useNavigate } from "react-router-dom";
import MenuBtn from "./Components/MenuBtn";
import useLogout from "@/features/auth/login/hooks/useLogout";
import RequiredRole from "@/features/auth/RequiredRole";
import { useDispatch } from "react-redux";
import { toggleDarkMode } from "@/redux/themeSlice";

export default function SidebarMenuLayout() {
  const navigate = useNavigate()
  const {logOut} = useLogout()
  const dispatch = useDispatch()
  return (
      <div className="text-2xl min-w-[4vw] bg-[#ffffff] dark:bg-[#747474] border-r-2 border-[#33333315] relative">
        <ul className="flex flex-col h-[100vh] gap-8 pt-[15vh]">
          <li ><MenuBtn desc="Home" icon="src/layout/sidebarMenu/icon/icons8-home.svg" onClick={()=>{navigate("/")}}/></li>
          <RequiredRole role="EMPLOYEE">  {/*Afficher quand l'utilisateur a le role EMPLOYEE*/}
            <li><MenuBtn desc="Notification" icon="src/layout/sidebarMenu/icon/icons8-notification.svg"/></li>
            <li><MenuBtn desc="Profile" icon="src/layout/sidebarMenu/icon/profil.svg" onClick={()=>{navigate("/profile")}}/></li>
            <li><MenuBtn desc="Demander conger" icon="src/layout/sidebarMenu/icon/conger.svg" onClick={()=>{navigate("/conger")}}/></li>
            <li><MenuBtn desc="Demander Permission" icon="src/layout/sidebarMenu/icon/permission.svg" onClick={()=>{navigate("/permission")}}/></li>
          </RequiredRole>
          <li><MenuBtn desc="Light Mode" icon="src/layout/sidebarMenu/icon/lightMode.svg" onClick={()=>dispatch(toggleDarkMode())}/></li>
          
          <li className="absolute bottom-6"><MenuBtn desc="Deconnexion" icon="src/layout/sidebarMenu/icon/logout-svgrepo-com.svg" onClick={()=>logOut()}/></li>
        </ul>
      </div>
     
  );
}
