import { propsTWeeks } from '@/lib/interface';
import { numberToMonth } from '@/lib/others';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { useState } from 'react';

export const WeeklyCalendar = ({
  calendarWeekData,
  nextWeek,
  prevWeek,
  toDayDate,
  handleDayClick,
  isConger,
  isPastDate,
}: propsTWeeks) => {
  const today = new Date().toDateString();
  const daysPerWeek = 7;
  const [currentWeekIndex, setCurrentWeekIndex] = useState(0);

  const weeks = [];
  if (calendarWeekData && Array.isArray(calendarWeekData.calendarDays)) {
    for (let i = 0; i < calendarWeekData.calendarDays.length; i += daysPerWeek) {
      weeks.push(calendarWeekData.calendarDays.slice(i, i + daysPerWeek));
    }
  }

  const handleNextWeek = () => {
    setCurrentWeekIndex((prevIndex) => Math.min(prevIndex + 1, weeks.length - 1));
    nextWeek();
  };

  const handlePrevWeek = () => {
    setCurrentWeekIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    prevWeek();
  };

  const handleToday = () => {
    setCurrentWeekIndex(0);
    toDayDate();
  };

  const currentWeek = weeks[currentWeekIndex] || [];

  return (
    <>
      <div className="flex gap-5 mb-5">
        <div className="flex">
          <button
            className="mx-10 text-lg px-3 border-[3px] border-sky-300 hover:bg-sky-300 hover:text-white rounded-xl"
            onClick={handleToday}
          >
            Today
          </button>
          <button onClick={handlePrevWeek}>
            <GrPrevious className="mt-1 mr-2 text-black" />
          </button>
          <button onClick={handleNextWeek}>
            <GrNext className="mt-1 ml-2 text-black" />
          </button>
        </div>
        <div className="mt-3 text-sm 2xl:text-2xl font-semibold text-[#333]">
          {numberToMonth(calendarWeekData.month)} {calendarWeekData.year}
        </div>
      </div>

      <div>
        <table className="w-full h-[70vh] border border-gray-200 bg-white">
          <thead>
            <tr className="text-center font-normal text-black">
              <th className="w-[5%] text-sm 2xl:text-lg">Heure</th>
              {['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'].map((day, index) => (
                <th key={index} className="py-2 2xl:py-4 w-[13.5%] text-sm 2xl:text-lg border border-gray-100">
                  {day}               
                  {currentWeek[index] && <div className="text-xs">{new Date(currentWeek[index].date).getDate()}</div>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 24 }, (_, hour) => (
              <tr key={hour} className="h-32">
                <td className="flex items-center justify-center">{hour.toString().padStart(2, '0')}:00</td>
                {currentWeek.map((day) => (
                  <td
                  key={day.date}
                  className={`border border-sky-100 relative hover:bg-sky-50 text-sm 2xl:text-lg ${
                    !isPastDate(day.date) ? "cursor-pointer" : "cursor-not-allowed"
                  } ${!day.inMonth ? "bg-slate-100" : ""}
                  ${new Date(day.date).toDateString() === today ? "bg-blue-200" : ""}`}
                  onClick={() => handleDayClick(day.date)}
                  >
                    <div className="absolute top-0 right-0 left-0">{isConger(day.date)}</div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default WeeklyCalendar;

