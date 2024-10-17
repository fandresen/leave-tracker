import HomeProvider from "@/features/admin/Context/HomeContext";
import UsersArrayContainer from "@/features/admin/home/container/UsersArrayContainer";
import { useSelector } from "react-redux";
import { Rootstate } from "@/redux/store";
import CreateDepartement from "./CreateDepartementPage";
import { useEffect, useState } from "react";

export default function HomeAdmin() {
  const thereIsNoDepartement: boolean = useSelector<Rootstate>(
    (state) => state.admin
  ) as boolean;
  const [noDepartement,setNodepartement] = useState<boolean>(thereIsNoDepartement);

  useEffect(() => {
    setNodepartement(thereIsNoDepartement);
  }, [thereIsNoDepartement]);
  console.log(noDepartement)
  return (
    <>
      <HomeProvider>
        {!noDepartement ? (
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
