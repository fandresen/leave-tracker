import ProfilAvatar from "@/components/ProfilAvatar";

interface propsT{
    name: string;
    desc: string;
}
export default function SingleNotification({desc,name}:propsT) {
  return (
    <div className="flex lg:gap-3 2xl:gap-4 bg-white py-2 px-2 rounded-xl">
        <ProfilAvatar url="https://github.com/shadcn.png" className="w-10 h-10"/>
        <div>
            <h1 className="text-gray-800 font-semibold -mt-1">{name}  <span className="text-gray-500 text-sm">{desc}</span></h1>   
        </div>
    </div>
  )
}
