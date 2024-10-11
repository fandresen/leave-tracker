import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

interface propsT{
  url?:string;
  className?:string;
  lastName:string;
  classNameProfil:string;
}
export default function ProfilAvatar({url,className,lastName,classNameProfil}:propsT) {

    const name = lastName?.charAt(0).toUpperCase();

  return (
    <>
        <div className={className}>
            <Avatar>
                <AvatarImage src={url} className="rounded-full"/>
                <div className={`bg-red-400 text-center p-2 rounded-full flex justify-center items-center ${classNameProfil}`}>
                <AvatarFallback className="text-white font-semibold ">{name}</AvatarFallback>
                </div>
                
            </Avatar>
        </div>
    </>
  );
}
