import ProfilAvatar from "@/components/ProfilAvatar";

interface propsT {
  firstName: string;
  lastName: string;
  email:string;
  url?: string;
}
export default function SingleEmployeeCard({
  firstName,
  lastName,
  email,
  url,
}: propsT) {
  return (
    <div className="flex py-5 px-4 bg-gray-100 lg:w-[300px] 2xl:w-[350px] mt-2 rounded-xl">
      <ProfilAvatar classNameProfil="w-10 h-10" lastName={lastName} url={url} />
      <div className="ml-5">
        <h1 className="text-xl text-gray-600">{firstName}</h1>
        <h2 className="text-sm text-gray-400">{email}</h2>
      </div>
    </div>
  );
}
