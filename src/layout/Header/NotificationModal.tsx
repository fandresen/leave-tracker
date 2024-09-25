import Notification from "@/components/Notification";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import SingleNotification from "./SingleNotification";

export default function NotificationModal() {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none">
          <Notification className="w-7 h-7" />
        </DropdownMenuTrigger >
        <DropdownMenuContent className="bg-slate-50 lg:w-[22vw] 2xl:w-[18vw] 2xl: lg:mr-[150px] 2xl:mr-[180px] lg:pl-7 2xl:pl-10 rounded-2xl lg:pt-5 lg:pb-8 2xl:pt-2 2xl:pb-8 lg:px-5 shadow-2xl border border-gray-200">
          <DropdownMenuLabel className="lg:mb-1">
            <h1 className="lg:text-lg 2xl:text-xl text-gray-500 font-semibold">
              Notifications
            </h1>
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-gray-300 h-[2px] lg:mb-3"/>
          <DropdownMenuItem>
            <SingleNotification name="Fandresena" desc="a demandé un conger a demandé un conger"/>
          </DropdownMenuItem>


        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
