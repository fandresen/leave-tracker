import { useEffect, useState } from 'react'
import UsersArray from '../presentation/UsersArray'
import { UserT } from '@/lib/interface'
import { useAxiosWithToken } from '@/lib/interceptor';
import { useHomeContext } from '../../Context/HomeContext';

export default function UsersArrayContainer() {
  const axios = useAxiosWithToken()
  const [users,setUsers]=useState<UserT[]>([
    { id: 1, first_name: 'John', last_name: 'Doe', email: 'john.doe@example.com', phone_number: '123-456-7890', departement_id: 1, in_Conger: false },
  ]);

  const {userModalOpen}=useHomeContext();

  const fetchData = async () => {
    try {
      const response = await axios.get('/users/entreprise')
      setUsers(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [userModalOpen])

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
    <UsersArray users={users}/>
  )
}