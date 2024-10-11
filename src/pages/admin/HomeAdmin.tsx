import HomeProvider from "@/features/admin/Context/HomeContext";
import UsersArrayContainer from "@/features/admin/home/container/UsersArrayContainer";
import NewDepartementModalContainer from "@/features/admin/home/container/NewDepartementModalContainer";
import { useSelector } from "react-redux";
import { Rootstate } from "@/redux/store";

export default function HomeAdmin() {
  const thereIsNoDepartement: boolean = useSelector<Rootstate>( (state) => state.admin) as boolean;
  return (
    <>
      <HomeProvider>
        {/* {!thereIsNoDepartement ? ( */}
          <>
            <NewDepartementModalContainer />
            <UsersArrayContainer />
          </>
        {/* ) : (
          ""
        )} */}
      </HomeProvider>
    </>
  );
}
