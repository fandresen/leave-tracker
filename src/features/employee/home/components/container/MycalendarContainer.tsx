import { useEffect, useState } from "react";
import MyCalendar, { calendardataT, events } from "../presentation/MyCalendar";
import { useAxiosWithToken } from "@/lib/interceptor";

export default function MycalendarContainer() {
  const axios = useAxiosWithToken();

  const [dataEvents, setDataEvents] = useState<events[]>();
  const [dataCalendar, setDataCalendar] = useState<calendardataT>({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    calendarDays: [
      {
        date: "",
        inMonth: false,
      },
    ],
  });


  const fetchData = async () => {
    try {
      //fetching data for calendar
      //TODO: put dataCalendar.year and month in the request
      const response = await axios.get("/calendar");
      if (response.status === 200) {
        setDataCalendar(response.data);
      }

      //fetching data for events
      const res = await axios.get("/absence");
      if (res.status === 200) {
        setDataEvents(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
  const toDayDate = () => {
    setDataCalendar({
      ...dataCalendar!,
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
    });
  };

  if (!dataEvents) {
    return <p>Loading...</p>;
  }
  return (
    <MyCalendar
      events={dataEvents!}
      calendarData={dataCalendar!}
      nextMonth={nextMonth}
      prevMonth={prevMonth}
      toDayDate={toDayDate}
    />
  );
}
