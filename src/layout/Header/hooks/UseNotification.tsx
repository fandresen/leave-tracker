import { useAxiosWithToken } from "@/lib/interceptor";
import { notificationT } from "@/lib/interface";
import { useEffect, useState } from "react";

export default function UseNotification() {
  const axios = useAxiosWithToken();

  const audio = new Audio("src/assets/notificationSound.wav");

  const [notifications, setNotifications] = useState<notificationT[]>([]);

  const getNewNotification = async (lastNotifId: number): Promise<notificationT | undefined> => {
    try {
      const res = ( await axios.get<notificationT>(`/notification?lastNotifId=${lastNotifId}`)).data;
      console.log(res);
      return res;
    } catch (error) {
      console.log("error :", error);
      return undefined;
    }
  };

  const getPastNotification = async (): Promise<notificationT[] | undefined> => {
    try {
      const res = ( await axios.get<notificationT[]>("/notification/all")).data;
      return res;
    } catch (error) {
      console.log("error :", error);
      return undefined;
    }
  };

  useEffect(()=>{
    const fetchPastNotification = async () => {
      const pastNotifications = await getPastNotification();
      if (pastNotifications) {
        setNotifications(pastNotifications);
      }
    };
    fetchPastNotification();
  },[])

  useEffect(() => {
    const fetchNotification = async () => {

      const lastNotifId = notifications[notifications.length - 1]?.id || 0; //recupéré le dernier id de notification 
      const newNotification = await getNewNotification(lastNotifId);
      if (newNotification) {
        audio.play();
        // Mettre à jour les notifications en utilisant la fonction de mise à jour
        setNotifications((prevNotifications) => [
          ...prevNotifications,
          newNotification,
        ]);
        console.log(notifications);
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
  }, [notifications]);

  return {
    notifications,
  };
}
