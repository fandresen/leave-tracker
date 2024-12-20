import { useEffect, useState } from "react";
import UsersArray from "../presentation/UsersArray";
import { DepartementT, UserT } from "@/lib/interface";
import { useAxiosWithToken } from "@/lib/interceptor";
import TopBar from "../presentation/TopBar";
import TopSection from "../presentation/TopSection";
import { useHomeContext } from "../../Context/HomeContext";

export default function UsersArrayContainer() {
  const axios = useAxiosWithToken();
  const [users, setUsers] = useState<UserT[]>([]);
  const [allDepartement, setAllDepartement] = useState<DepartementT[]>([]);
  const [departementInfo, setDepartementInfo] = useState<DepartementT>({
    departementModel: {
      id: 0,
      name: "",
    },
    responsable: {
      lastname: "",
      email: "",
      firstname: "",
      id: 0,
      profilePictureUrl: "",
    },
    numberOfEmployees: 0,
  });

  const { actualDepID, changeActualDepID } = useHomeContext();

  // const fetchUsers = async () => {
  //   try {
  //     const response = await axios.get("/users/entreprise");
  //     setUsers(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const fetchDepartement = async () => {
    try {
      const response = await axios.get<DepartementT>(
        `/departement/${actualDepID}`
      );
      setDepartementInfo(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchAllDepartement = async () => {
    try {
      const res = await axios.get<DepartementT[]>("/departement");
      if (res.status === 200) {
        setAllDepartement(res.data);
      }
    } catch (error) {
      console.error("Error fetching departments:", error);
    }
  };

  //CLiquer sur un departement Component
  const onclickSingleDepartement = (departement_id: number) => {
    changeActualDepID(departement_id);
  };

  useEffect(() => {
    // fetchUsers();
    fetchDepartement();
    fetchAllDepartement();
  }, [actualDepID]);

  // useEffect(() => {
  //   // Implement search functionality here
  // }, [users])

  // Implement pagination here to display only a subset of users at a time
  // const pageSize = 10
  // const currentPage = 1
  // const startIndex = (currentPage - 1) * pageSize
  // const endIndex = startIndex + pageSize
  // const currentUsers = users.slice(startIndex, endIndex)

  // Implement sorting functionality here
  // const sortUsersByName = () => {
  //   const sortedUsers = [...users].sort((a, b) => a.

  return (
    <>
      <div className="flex justify-center">
        <div className="w-[90vw]">
          {allDepartement.length > 0 && (
            <TopSection
              departement_info={departementInfo}
              allDepartement={allDepartement}
              onClickDepartement={onclickSingleDepartement}
            />
          )}
          <TopBar />
          <UsersArray users={users} />
        </div>
      </div>
    </>
  );
}
