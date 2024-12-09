import HomeProvider from "@/features/admin/Context/HomeContext";
import UsersArrayContainer from "@/features/admin/home/container/UsersArrayContainer";
import { useSelector } from "react-redux";
import { Rootstate } from "@/redux/store";
import CreateDepartement from "./CreateDepartementPage";

export default function HomeAdmin() {
  const thereIsNoDepartement: boolean = useSelector<Rootstate>(
    (state) => state.admin.noDepartement
  ) as boolean;

  return (
    <>
      <HomeProvider>
        {!thereIsNoDepartement ? (
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
