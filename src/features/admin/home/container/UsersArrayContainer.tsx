import { useEffect, useState } from "react";
import UsersArray from "../presentation/UsersArray";
import { DepartementT, UserT } from "@/lib/interface";
import { useAxiosWithToken } from "@/lib/interceptor";
import TopBar from "../presentation/TopBar";
import TopSection from "../presentation/TopSection";
import { useHomeContext } from "../../Context/HomeContext";
import { useDispatch } from "react-redux";
import { setDepartement } from "@/redux/AdminSlice";

export default function UsersArrayContainer() {
  const axios = useAxiosWithToken();
  const [users, setUsers] = useState<UserT[]>([]);
  const [departementInfo, setDepartementInfo] = useState<DepartementT>();


  const { actualDepID } = useHomeContext();

  const fetchUsers = async () => {
    try {
      const response = await axios.get("/users/entreprise");
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchDepartement = async () => {
    try {
      const response = await axios.get(`/departements/${actualDepID}`);
      setDepartementInfo(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchDepartement();
  }, []);

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
          <TopSection />
          <TopBar />
          <UsersArray users={users} />
        </div>
      </div>
    </>
  );
}
