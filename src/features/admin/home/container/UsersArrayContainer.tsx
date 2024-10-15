import { useEffect, useState } from "react";
import UsersArray from "../presentation/UsersArray";
import { UserT } from "@/lib/interface";
import { useAxiosWithToken } from "@/lib/interceptor";
import { useHomeContext } from "../../Context/HomeContext";
import TopBar from "../presentation/TopBar";
import ToggleRightLayout from "@/components/ToggleRightLayout";

export default function UsersArrayContainer() {
  const axios = useAxiosWithToken();
  const [users, setUsers] = useState<UserT[]>([]);
  const [openLayout, setOpenLayout] = useState(false);

  const { userModalOpen } = useHomeContext();

  const fetchData = async () => {
    try {
      const response = await axios.get("/users/entreprise");
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [userModalOpen]);

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
          <TopBar />
          <UsersArray users={users} />
        </div>
        <div className="">
          <ToggleRightLayout
            openLayout={openLayout}
            setOpenLayout={setOpenLayout}
            toggleButton={
              <button className="px-4 py-2 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600">
                Toggle
              </button>
            }
          >
            <h1 className="text-5xl text-center">Test</h1>
          </ToggleRightLayout>
        </div>
      </div>
    </>
  );
}
