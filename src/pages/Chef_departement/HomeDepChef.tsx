
import ListDepEmployeeContainer from "@/features/chef_dep/container/ListDepEmployeeContainer";
import MycalendarContainer from "@/features/employee/home/components/container/MycalendarContainer";

export default function HomeDepChef() {
 
  return (
    <>
        <div className="flex">
          <ListDepEmployeeContainer />
          <div className="w-full lg:-mt-10 2xl:-mt-16">
            <MycalendarContainer />
          </div>
        </div>
    </>
  );
}
