import HomeProvider from "@/features/admin/Context/HomeContext";
import NewUserModalContainer from "@/features/admin/home/container/NewUserModalContainer";

export default function CreateUser() {
  return (
    <HomeProvider>
      <div className="bg-white w-[99vw] h-[96vh] absolute top-5 pt-20">
        <NewUserModalContainer />
      </div>
    </HomeProvider>
  );
}
