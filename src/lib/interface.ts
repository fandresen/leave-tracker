import { ReactNode } from "react";

export interface calendardataT {
    year: number;
    month: number;
    calendarDays: [
      {
        date: string;
        inMonth: boolean;
      }
    ];
  }
  
export  interface propsT {
    calendarData: calendardataT;
    prevMonth: () => void;
    nextMonth: () => void;
    toDayDate: () => void;
    handleDayClick: (date: string) => void;
    isConger: (date: string) => ReactNode;
    isPastDate: (date: string) => boolean;
  }