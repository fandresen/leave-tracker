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

// export interface conger {
//   id: number;
//   title: string;
//   start: string;
//   end: string;
// }

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

export interface DepartementT {
  departementModel:{
    id:number;
    name:string;
  }
  responsable:{
    email:string;
    firstname:string;
    id:number;
    lastname:string;
    profilePictureUrl:string;
  }
  numberOfEmployees:number;
}

export interface UserT {
  id?: number;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  role?:"USER"|"CHEF_DEP";
  address?: string;
  picture?:string;
  departement_id:number;
  password?: string;
  in_Conger:boolean;
}
export interface UserDTO{
  id:number;
  firstname: string;
  lastname: string;
  email: string;
  profilePictureUrl: string;
}

export interface createEntrepriseT{
  entreprise : EntrepriseT;
  admin : AdminT;
}

export interface formDatacreatetionEntreprise{
  companyName: string;
  email: string;
  address: string;
  phone: string;
  licenseType: string;
}

export interface notificationT {
  id: number;
  senderID: number;
  recipientId: number;
  notification_date: string;
  subject: string;
  senderName: string;
  senderProfilePictureUrl: string;
  data:string;
}

export interface absenceDTO{
  id:number;
  user_name:string;
  startDate : string;
  endDate: string;
  type: string;
  status : "APPROUVE" | "REJECTEE" | "EN_COURS";
}

export interface CreationDepartementT {
  departement_id: number;
  departement_name: string;
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  picture: any;
  in_Conger: boolean;
  address: string;
  id: number;
  password: string;
  role: "USER" | "CHEF_DEP";
}


export interface CreationDepartmentDTO{
  user : UserT;
  departement_name : string;
}

// enum Status {
//   EN_COURS = "EN_COURS",
//   APPROUVE = "APPROUVE",
//   REFUSE = "REFUSE"
// }

// export interface AbsenceModel {
//   id?: number;               
//   user_id?: number;           
  
//   startDate: string;         
//   endDate: string;           
  
//   status?: Status;            
//   type: string;          
// }


