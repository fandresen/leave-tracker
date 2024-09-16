import HomeProvider from "@/features/admin/Context/HomeContext";
import UsersArrayContainer from "@/features/admin/home/container/UsersArrayContainer";
import NewDepartementModalContainer from "@/features/admin/home/container/NewDepartementModalContainer";
import NewUserModalContainer from "@/features/admin/home/container/NewUserModalContainer";
import TopBar from "@/features/admin/home/presentation/TopBar";

export default function HomeAdmin() {
  return (
    <>
      <HomeProvider>
        <NewDepartementModalContainer />
        <NewUserModalContainer/>
        <TopBar />
        <UsersArrayContainer/>
      </HomeProvider>
    </>
  );
}
