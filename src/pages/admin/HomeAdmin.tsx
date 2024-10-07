import HomeProvider from "@/features/admin/Context/HomeContext";
import UsersArrayContainer from "@/features/admin/home/container/UsersArrayContainer";
import NewDepartementModalContainer from "@/features/admin/home/container/NewDepartementModalContainer";

export default function HomeAdmin() {
  return (
    <>
      <HomeProvider>
        <NewDepartementModalContainer />
        <UsersArrayContainer/>
      </HomeProvider>
    </>
  );
}
