import { useState } from "react";
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
import { getSecondsSinceDate } from "@/lib/others";
import UseNotification from "./hooks/UseNotification";

export default function NotificationModal() {
  const { notifications } = UseNotification();
  
  // État pour gérer combien de notifications sont affichées
  const [visibleCount, setVisibleCount] = useState(10);
  
  // Fonction pour gérer l'affichage de plus de notifications
  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 10);  // Augmente le nombre de notifications affichées par 10
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none">
          <Notification className="w-7 h-7" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-slate-50 lg:w-[26vw] 2xl:w-[20vw] max-h-[70vh] overflow-y-scroll lg:-mr-[100px] 2xl:mr-[50px] mt-5 lg:pl-7 2xl:pl-10 rounded-2xl lg:pt-5 lg:pb-8 2xl:pt-2 2xl:pb-8 lg:px-5 shadow-2xl border border-gray-200">
          <DropdownMenuLabel className="lg:mb-1">
            <h1 className="lg:text-lg 2xl:text-xl text-gray-500 font-semibold">
              Notifications
            </h1>
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-gray-300 h-[2px] lg:mb-3" />

          {notifications.length === 0 && (
            <div className="flex items-center justify-center gap-3 mt-5">
              <p className="text-gray-400 text-sm">Aucune notification pour le moment.</p>
            </div>
          )}

          {/* Affiche seulement les `visibleCount` premières notifications */}
          {notifications
            ?.slice()
            .reverse()
            .slice(0, visibleCount) // Affiche jusqu'à `visibleCount` notifications
            .map((notification) => (
              <DropdownMenuItem className="outline-none mt-2" key={notification.id}>
                <SingleNotification
                  key={notification.id}
                  name={notification.senderName}
                  desc={notification.subject}
                  senderProfilePictureUrl={notification.senderProfilePictureUrl}
                  time={getSecondsSinceDate(notification.notification_date)}
                  path={notification.data}
                />
              </DropdownMenuItem>
            ))}

          {/* Bouton "Voir plus" */}
          {visibleCount < notifications.length && (
            <div className="flex items-center justify-center mt-4">
              <button
                onClick={handleShowMore}
                className="text-blue-500 hover:underline text-sm"
              >
                Voir plus
              </button>
            </div>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
