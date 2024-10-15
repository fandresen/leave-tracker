import HomeProvider from "@/features/admin/Context/HomeContext";
import UsersArrayContainer from "@/features/admin/home/container/UsersArrayContainer";
import { useSelector } from "react-redux";
import { Rootstate } from "@/redux/store";
import CreateDepartement from "./CreateDepartementPage";

export default function HomeAdmin() {
  const thereIsDepartement: boolean = useSelector<Rootstate>(
    (state) => state.admin
  ) as boolean;
  return (
    <>
      <HomeProvider>
        {thereIsDepartement ? (
          <>
            <div>
              <UsersArrayContainer />
            </div>
          </>
        ) : (
          <CreateDepartement />
        )}
      </HomeProvider>
    </>
  );
}
