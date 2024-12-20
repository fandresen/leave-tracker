import { Outlet } from "react-router-dom";
// import SidebarMenuLayout from "./sidebarMenu/SidebarMenuLayout";
import Header from "./Header/Header";

export default function RequireLayout() {
  return (
    <div className="flex w-full">
      {/* <SidebarMenuLayout /> */}
      <div className="felx flex-col w-full h-full p-1 bg-[#fafdff] dark:bg-slate-700">
      {/* <div className="felx flex-col w-full h-full ml-[16%] md:ml-[4%] p-1 bg-[#fbfff6] dark:bg-slate-700"> */}
        <Header />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
