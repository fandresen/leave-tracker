import { IoIosNotifications } from "react-icons/io";

interface propsT{
    className:string;
}
export default function Notification({className}:propsT) {
  return (
    <div className={`${className} relative`}>
         <IoIosNotifications className={`${className} relative text-[#585858] dark:text-white`}/>
         <div className="absolute top-0 right-0 text-white bg-red-600 px-1 rounded-[50%] font-bold text-[10px]">1</div> 
    </div>
  )
}
