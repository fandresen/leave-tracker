import { useEffect, useState } from 'react'
import MyCalendar, { events } from '../presentation/MyCalendar'
import { useAxiosWithToken } from '@/lib/interceptor'



export default function MycalendarContainer() {
  const axios = useAxiosWithToken();

  const [data,setData]=useState<events[]>()
const fetchData = async ()=>{
  try {
    const res = (await axios.get('/absence'))
if (res.status === 200) {
   setData(res.data.absence)
}
  
  } catch (error) {
    console.log(error);
  }

}

useEffect(()=>{
  fetchData()
},[])

if(!data){
  return <p>Loading...</p>
}
  return (

    <MyCalendar events={data}/>
  )
}
