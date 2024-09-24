import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export default function ProfilAvatar({url,className}:{url:string,className?:string}) {
  return (
    <>
        <div className={className}>
            <Avatar>
                <AvatarImage src={url} className="rounded-full"/>
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
    </>
  );
}
