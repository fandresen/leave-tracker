import ProfilAvatar from "@/components/ProfilAvatar";

interface propsT{
    name: string;
    desc: string;
    time : number;
    senderId:number;
}
export default function SingleNotification({desc,name,time,senderId}:propsT) {
  return (
    <div className="flex lg:gap-3 2xl:gap-4 bg-white py-2 px-2 rounded-xl">
        <ProfilAvatar url="https://github.com/shadcn.png" className="min-w-10 max-w-10 min-h-10 max-h-10"/>
        <div>
            <h1 className="text-gray-800 font-medium lg:text-sm -mt-1">{name}  <span className="text-gray-500 lg:text-[11px] 2xl:text-[12px] font-normal">{desc}</span></h1>   
        </div>
        <h1 className="lg:mt-6 lg:text-[11px] 2xl:text-[13px] text-gray-400 lg:pr-1 2xl:pr-4">{`${time<60?`${time}s`:time<60*60?`${Math.round(time/60)}min`:time<86400?`${Math.round(time/3600)}h`:`${Math.round(time/86400)}j`}`}</h1>
    </div>
  )
}
