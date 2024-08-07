import { ReactNode, useCallback, useEffect, useState } from "react";
import { useAxiosWithToken } from "@/lib/interceptor";
import LoadSpinner from "@/components/ui/LoadSpinner";
import { dateToYMDString } from "@/lib/others";
import AbsenceComponent from "../ui/AbsenceComponent";
import DemandeAbsencePopUp from "@/features/employee/Absence/Components/presentation/DemandeAbsencePopUp";
import { useDispatch } from "react-redux";
import { setStartDate, toggleModal } from "@/redux/demandeAbsenceSlice";
import { SelectAffichage } from "../ui/SelectAffichage";
import MonthlyCalendar from "../presentation/MonthlyCalendar";
import { calendardataT } from "@/lib/interface";
import { WeeklyCalendar } from "../presentation/WeeklyCalendar";

export interface conger {
  id: number;
  title: string;
  start: string;
  end: string;
}

export default function MycalendarContainer({handleChangeValue}: {handleChangeValue: (value: string) => void}) {
  const axios = useAxiosWithToken();
  const dispatch = useDispatch();
  const [calendarType, setCalendarType] = useState<string>('month');

  const SwitchType = useCallback(() => {
    setCalendarType(prevCalendarType => {
      const newType = prevCalendarType === 'month' ? 'week' : 'month';
      return newType;
    });
  }, [handleChangeValue]);

  const [dataConger, setDataConger] = useState<conger[]>();

  const [dataCalendar, setDataCalendar] = useState<calendardataT>({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    weekday: new Date().getDay(),
    calendarDays: [
      {
        date: "",
        inMonth: false,
      },
    ],
  });

  const todayDate = new Date();

  const fetchData = async () => {
    try {
      //fetching dataCalendar and puting year and month in the request
      const response = await axios.get(
        `/calendar?year=${dataCalendar.year}&month=${dataCalendar.month}`
      );
      if (response.status === 200) {
        setDataCalendar(response.data);
      }

      //fetching data for conger
      const res = await axios.get("/absence");
      if (res.status === 200) {
        setDataConger(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [dataCalendar.month]);

  const nextMonth = () => {
    if (dataCalendar?.month === 12) {
      setDataCalendar({
        ...dataCalendar,
        month: 1,
        year: dataCalendar.year + 1,
      });
    } else {
      setDataCalendar({ ...dataCalendar!, month: dataCalendar!.month + 1 });
    }
  };

  const prevMonth = () => {
    if (dataCalendar?.month === 1) {
      setDataCalendar({
        ...dataCalendar,
        month: 12,
        year: dataCalendar.year - 1,
      });
    } else {
      setDataCalendar({ ...dataCalendar!, month: dataCalendar!.month - 1 });
    }
  };

  const nextWeek = () => {
    if (dataCalendar?.month === 12 && dataCalendar?.weekday === 0) {
      setDataCalendar({
        ...dataCalendar,
        year: dataCalendar.year + 1,
        month: 1,
        weekday: new Date(dataCalendar.year + 1, 1, 1).getDay(),
      });
    } else if (dataCalendar?.weekday === 0) {
      setDataCalendar({
        ...dataCalendar,
        month: dataCalendar.month + 1,
        weekday: new Date(dataCalendar.year, dataCalendar.month + 1, 1).getDay(),
      });
    } else {
      setDataCalendar({
       ...dataCalendar,
        weekday: (dataCalendar.weekday! + 1) % 7,
      });
    }
  }

  const prevWeek = () => {
    if (dataCalendar?.month === 1 && dataCalendar?.weekday === 0) {
      setDataCalendar({
        ...dataCalendar,
        year: dataCalendar.year - 1,
        month: 12,
        weekday: new Date(dataCalendar.year - 1, 12, 0).getDay(),
      });
    } else if (dataCalendar?.weekday === 0) {
      setDataCalendar({
        ...dataCalendar,
        month: dataCalendar.month - 1,
        weekday: new Date(dataCalendar.year, dataCalendar.month - 1, 0).getDay(),
      });
    } else {
      setDataCalendar({
       ...dataCalendar,
        weekday: (dataCalendar.weekday! - 1) % 7,
      });
    }
  }

  const toDayDate = () => {
    setDataCalendar({
      ...dataCalendar!,
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
    });
  };

  //Disabled past date
  const isPastDate = (date: string): boolean => {
    const newdate = new Date(date);
    if (newdate < new Date(todayDate.getTime() - 24 * 60 * 60 * 1000)) {
      return true;
    }
    return false;
  };

  const handleDayClick = (date: string) => {
    if (!isPastDate(date)) {
      dispatch(setStartDate(new Date(date).toString()));
      dispatch(toggleModal(true));
    }
    console.log(date);
  };

  //fonction pour savoir si il y une journné dans un conger et retourne un composant conger
  const IsConger = (date: string): ReactNode => {
    let inconger: boolean = false;
    const congerTab: conger[] = [];
    const newdate = dateToYMDString(date);
    dataConger?.forEach((conger, index) => {
      const congerStart = dateToYMDString(conger.start);
      const congerEnd = dateToYMDString(conger.end);
      if (newdate >= congerStart && newdate <= congerEnd) {
        inconger = true;
        congerTab[index] = conger;
        return true;
      }
      return false;
    });
    if (inconger) {
      return congerTab.map((conger) => (
        <AbsenceComponent title={conger.title} />
      ));
    }
    return "";
  };

  if (!dataConger) {
    return (
      <div className="w-full">
        <LoadSpinner />
      </div>
    );
  }
  return (
    <>
        <div className="mt-3">
          <SelectAffichage 
            handleChangeValue={SwitchType}
          />
        </div>
        <div>
          {
            calendarType === 'month' && <MonthlyCalendar
          calendarData={dataCalendar!}
          nextMonth={nextMonth}
          prevMonth={prevMonth}
          toDayDate={toDayDate}
          handleDayClick={handleDayClick}
          isConger={IsConger}
          isPastDate={isPastDate}
        />
          }

          {
            calendarType === 'week' && <WeeklyCalendar
            calendarData={dataCalendar!}
            nextWeek={nextWeek}
            prevWeek={prevWeek}
            toDayDate={toDayDate}
            handleDayClick={handleDayClick}
            isConger={IsConger}
            isPastDate={isPastDate}
          />
          }
        </div>
      
      <DemandeAbsencePopUp />
    </>
  );
}
