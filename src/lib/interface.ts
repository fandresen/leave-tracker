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

export interface propsTMonths {
  calendarMonthData: calendardataT;
  prevMonth: () => void;
  nextMonth: () => void;
  toDayDate: () => void;
  handleDayClick: (date: string) => void;
  isConger: (date: string) => ReactNode;
  isPastDate: (date: string) => boolean;
}

export interface propsTWeeks {
  calendarWeekData: calendardataT;
  prevWeek: () => void;
  nextWeek: () => void;
  toDayDate: () => void;
  handleDayClick: (date: string) => void;
  isConger: (date: string) => ReactNode;
  isPastDate: (date: string) => boolean;
}

export interface propsAbsence {
  id: number;
  title: string;
  startDate: number;
  endDate: number;
}

export interface conger {
  id: number;
  title: string;
  start: string;
  end: string;
}

export interface propsT {
  handleChangeValue: (value: "month" | "week") => void;
}

export interface EntrepriseT {
  name: string;
}

export interface AdminT {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  address: string;
  password: string;
}

export interface createEntrepriseT{
  entreprise : EntrepriseT;
  admin : AdminT;
}
