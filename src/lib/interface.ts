import { ReactNode } from "react";

export interface calendardataT {
    year: number;
    month: number;
    weekday?: number;
    calendarDays: [
      {
        date: string;
        inMonth: boolean;
      }
    ];
  }
  
export  interface propsTMonths {
    calendarMonthData: calendardataT;
    prevMonth: () => void;
    nextMonth: () => void;
    toDayDate: () => void;
    handleDayClick: (date: string) => void;
    isConger: (date: string) => ReactNode;
    isPastDate: (date: string) => boolean;
  }

  export  interface propsTWeeks {
    calendarData: calendardataT;
    prevWeek: () => void;
    nextWeek: () => void;
    toDayDate: () => void;
    handleDayClick: (date: string) => void;
    isConger: (date: string) => ReactNode;
    isPastDate: (date: string) => boolean;
  }