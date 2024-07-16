import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

export interface events {
  id: number;
  title: string;
  start: string;
  end: string;
}

interface propsT {
  events: events[];
}

const MyCalendar = ({ events }: propsT) => {
  console.log(events);

  return (
    <div style={{ height: "80vh" }}>
      <Calendar
        localizer={localizer}
        events={events.map((event) => ({
          title: event.title,
          start: new Date(event.start),
          end: new Date(event.end),
        }))}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default MyCalendar;
