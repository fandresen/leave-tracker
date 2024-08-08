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
import  WeeklyCalendar  from "../presentation/WeeklyCalendar";
import { calendardataT } from "@/lib/interface";

export interface conger {
  id: number;
  title: string;
  start: string;
  end: string;
}

export default function MyCalendarContainer({ handleChangeValue }: { handleChangeValue: (value: string) => void }) {
  const axios = useAxiosWithToken();
  const dispatch = useDispatch();
  const [calendarType, setCalendarType] = useState<string>('month');
  const [dataConger, setDataConger] = useState<conger[]>();
  const [dataCalendar, setDataCalendar] = useState<calendardataT>({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    weekday: new Date().getDay(),
    calendarDays: [{ date: "", inMonth: false }],
  });

  const SwitchType = useCallback(() => {
    setCalendarType((prevCalendarType) => (prevCalendarType === 'month' ? 'week' : 'month'));
  }, [handleChangeValue]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/calendar?year=${dataCalendar.year}&month=${dataCalendar.month}`);
        if (response.status === 200) {
          setDataCalendar(response.data);
        }
        const res = await axios.get("/absence");
        if (res.status === 200) {
          setDataConger(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [dataCalendar.month]);

  const nextMonth = () => {
    setDataCalendar({
      ...dataCalendar,
      month: dataCalendar.month === 12 ? 1 : dataCalendar.month + 1,
      year: dataCalendar.month === 12 ? dataCalendar.year + 1 : dataCalendar.year,
    });
  };

  const prevMonth = () => {
    setDataCalendar({
      ...dataCalendar,
      month: dataCalendar.month === 1 ? 12 : dataCalendar.month - 1,
      year: dataCalendar.month === 1 ? dataCalendar.year - 1 : dataCalendar.year,
    });
  };

  const nextWeek = () => {
    setDataCalendar({
      ...dataCalendar,
      weekday: (dataCalendar.weekday! + 7) % 7,
      
    });
  };

  const prevWeek = () => {
    setDataCalendar({
      ...dataCalendar,
      weekday: (dataCalendar.weekday! - 7) % 7,
    });
  };

  const toDayDate = () => {
    setDataCalendar({
      ...dataCalendar,
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
    });
  };

  const isPastDate = (date: string): boolean => {
    const newdate = new Date(date);
    return newdate < new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
  };

  const handleDayClick = (date: string) => {
    if (!isPastDate(date)) {
      dispatch(setStartDate(new Date(date).toString()));
      dispatch(toggleModal(true));
    }
  };

  const IsConger = (date: string): ReactNode => {
    const congerTab = dataConger?.filter((conger) => {
      const congerStart = dateToYMDString(conger.start);
      const congerEnd = dateToYMDString(conger.end);
      return dateToYMDString(date) >= congerStart && dateToYMDString(date) <= congerEnd;
    }) || [];
    return congerTab.map((conger) => <AbsenceComponent key={conger.id} title={conger.title} />);
  };

  if (!dataConger) {
    return <LoadSpinner />;
  }

  return (
    <>
      <div className="mt-3">
        <SelectAffichage handleChangeValue={SwitchType} />
      </div>
      <div>
        {calendarType === 'month' && (
          <MonthlyCalendar
            calendarMonthData={dataCalendar}
            nextMonth={nextMonth}
            prevMonth={prevMonth}
            toDayDate={toDayDate}
            handleDayClick={handleDayClick}
            isConger={IsConger}
            isPastDate={isPastDate}
          />
        )}
        {calendarType === 'week' && (
          <WeeklyCalendar
            calendarWeekData={dataCalendar}
            nextWeek={nextWeek}
            prevWeek={prevWeek}
            toDayDate={toDayDate}
            handleDayClick={handleDayClick}
            isConger={IsConger}
            isPastDate={isPastDate}
          />
        )}
      </div>
      <DemandeAbsencePopUp />
    </>
  );
}
