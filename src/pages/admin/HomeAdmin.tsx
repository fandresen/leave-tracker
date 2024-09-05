import HomeProvider from "@/features/admin/Context/HomeContext";
import NewDepartementModalContainer from "@/features/admin/home/container/NewDepartementModalContainer";
import TopBar from "@/features/admin/home/presentation/TopBar";
import UsersArray from "@/features/admin/home/presentation/UsersArray";

export default function HomeAdmin() {
  return (
    <>
      <HomeProvider>
        <NewDepartementModalContainer />
        <TopBar />
        <UsersArray />
      </HomeProvider>
    </>
  );
}
