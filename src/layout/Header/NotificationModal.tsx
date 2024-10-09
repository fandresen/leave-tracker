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
import { useAxiosWithToken } from "@/lib/interceptor";
import { useEffect, useState } from "react";
import { getSecondsSinceDate } from "@/lib/others";

interface notificationT {
  id: number;
  senderID: number;
  recipientId: number;
  notification_date: string;
  subject: string;
  senderName: string;
  senderProfilePictureUrl: string;
}


export default function NotificationModal() {
  const axios = useAxiosWithToken();

  const [notifications, setNotifications] = useState<notificationT[]>([]);

  const getNotification = async (): Promise<notificationT | undefined> => {
    try {
      const res = (await axios.get<notificationT>(`/notification?lastNotifId=${notifications[notifications.length-1]?.id?notifications[notifications.length-1].id:0}`)).data;
      console.log(res);
      return res;
    } catch (error) {
      console.log("error :" ,error);
      return undefined;
    }
  };

  useEffect(() => {
    const fetchNotification = async () => {
      const newNotification = await getNotification();
      if (newNotification) {
        const audio = new Audio('src/assets/notificationSound.wav');
        audio.play();
        setNotifications([...notifications,newNotification]);
      }
    };

    const notificationFetch = setInterval(() => {
      fetchNotification();
    }, 10000);

    // Retourne une fonction de nettoyage
    return () => {
      clearInterval(notificationFetch);
      console.log("Interval cleared");
    };
  }, []);

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none">
          <Notification className="w-7 h-7" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-slate-50 lg:w-[22vw] 2xl:w-[18vw] 2xl: lg:mr-[150px] 2xl:mr-[180px] lg:pl-7 2xl:pl-10 rounded-2xl lg:pt-5 lg:pb-8 2xl:pt-2 2xl:pb-8 lg:px-5 shadow-2xl border border-gray-200">
          <DropdownMenuLabel className="lg:mb-1">
            <h1 className="lg:text-lg 2xl:text-xl text-gray-500 font-semibold">
              Notifications
            </h1>
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-gray-300 h-[2px] lg:mb-3" />

          {notifications?.map((notification) => (
            <DropdownMenuItem
              className="outline-none mt-2"
              key={notification.id}
            >
              <SingleNotification
                key={notification.id}
                name={notification.senderName}
                desc={notification.subject}
                senderProfilePictureUrl={notification.senderProfilePictureUrl}
                time={getSecondsSinceDate(notification.notification_date)}
              />
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
