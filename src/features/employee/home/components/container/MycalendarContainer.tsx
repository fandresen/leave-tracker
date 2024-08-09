import { ReactNode, useCallback, useEffect, useState } from "react";
import { useAxiosJava, useAxiosWithToken } from "@/lib/interceptor";
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

export default function MycalendarContainer({handleChangeValue}: {handleChangeValue: (value: string) => void}) {
  const axios1 = useAxiosWithToken();
  const axiosWithJava = useAxiosJava();
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

  const fetchData = async () => {
    try {
      //fetching dataCalendar and puting year and month in the request
      const response = await axiosWithJava.get(
        `/calendar?year=${dataCalendar.year}&month=${dataCalendar.month}`
      );
      if (response.status === 200) {
        setDataCalendar(response.data);
      }

      //fetching data for conger
      const res = await axios1.get("/absence");
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
  const currentWeekday = dataCalendar?.weekday!;
  const currentMonth = dataCalendar?.month;
  const currentYear = dataCalendar?.year;

  if (currentWeekday === 6) {
    if (currentMonth === 12) {
      setDataCalendar({
        ...dataCalendar,
        year: currentYear + 1,
        month: 1,
        weekday: 0,
      });
    } else {
      setDataCalendar({
        ...dataCalendar,
        month: currentMonth + 1,
        weekday: 0,
      });
    }
  } else {
    setDataCalendar({
      ...dataCalendar,
      weekday: currentWeekday + 1,
    });
  }
};

const prevWeek = () => {
  const currentWeekday = dataCalendar?.weekday!;
  const currentMonth = dataCalendar?.month;
  const currentYear = dataCalendar?.year;

  if (currentWeekday === 0) {
    if (currentMonth === 1) {
      setDataCalendar({
        ...dataCalendar,
        year: currentYear - 1,
        month: 12,
        weekday: 6,
      });
    } else {
      setDataCalendar({
        ...dataCalendar,
        month: currentMonth - 1,
        weekday: 6,
      });
    }
  } else {
    setDataCalendar({
      ...dataCalendar,
      weekday: currentWeekday - 1,
    });
  }
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
          <SelectAffichage 
            handleChangeValue={SwitchType}
          />
        </div>
        <div>
          {
            calendarType === 'month' && <MonthlyCalendar
          calendarMonthData={dataCalendar!}
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
            calendarWeekData={dataCalendar!}
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
