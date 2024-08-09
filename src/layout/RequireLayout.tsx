import { Outlet } from "react-router-dom";
import SidebarMenuLayout from "./sidebarMenu/SidebarMenuLayout";
import Header from "./Header/Header";

export default function RequireLayout() {
  return (
    <div className="flex w-full">
      <SidebarMenuLayout />
      <div className="felx flex-col w-full ml-[15%] md:ml-[5%] bg-[#fbfff6] dark:bg-slate-700">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
