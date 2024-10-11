import { useAxiosWithToken } from "@/lib/interceptor";
import ListDepEmployee from "../presentation/ListDepEmployee";
import { UserDTO } from "@/lib/interface";
import { useEffect, useState } from "react";

export default function ListDepEmployeeContainer() {
  const axios = useAxiosWithToken();
  const [employees, setEmployees] = useState<UserDTO[]>([]);

  const fetchListEmployees = async () => {
    try {
      const res = (await axios.get<UserDTO[]>("/users/department")).data;
      setEmployees(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchListEmployees();
  }, []);
  
  return <ListDepEmployee employees={employees} />;
}
