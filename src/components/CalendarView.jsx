import { Calendar, localizer } from './CalendarSetup';
import { events } from '../data/Data';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { add, sub, format } from 'date-fns';
import CustomDateHeader from './CustomDateHeader';

export default function CalendarView() {
  const [view, setView] = useState('week'); // 'day', 'month', etc.
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePrev = () => {
    let newDate;
    if (view === 'month') newDate = sub(currentDate, { months: 1 });
    else if (view === 'week') newDate = sub(currentDate, { weeks: 1 });
    else newDate = sub(currentDate, { days: 1 });

    setCurrentDate(newDate);
  };

  const handleNext = () => {
    let newDate;
    if (view === 'month') newDate = add(currentDate, { months: 1 });
  
    setCurrentDate(newDate);
  };


  return (
    <div className="p-4 h-[calc(100vh-80px)]">
      {/* Controls */}
      <div className="flex py-2 gap-4  items-center justify-center mb-4 bg-gray-100 rounded">
        <div className="flex gap-4">
          {['day', 'week', 'month'].map(v => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={`px-6 py-1 rounded capitalize ${view === v ? 'bg-gray-50 text-black' : 'bg-gray-100'}`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>
       {/* Prev / Next */}
        {view === 'month'?(
          <div className="flex justify-between items-center gap-2 mb-8 mt-6">
            <span className="font-bold text-3xl font-playfair ">{format(currentDate, 'MMMM yyyy')}</span>
            <div className='flex gap-3'>
              <button onClick={handlePrev} className="p-2 rounded hover:bg-gray-100 text-gray-500">
                  <FaChevronLeft />
              </button>
              <button onClick={handleNext} className="p-2  rounded hover:bg-gray-100 text-gray-500">
                  <FaChevronRight />
              </button>
            </div>
          </div>
        ):''}

      {/* Calendar */}
     <Calendar
      localizer={localizer}
      events={events}
      view={view}
      date={currentDate}
      onNavigate={setCurrentDate}
      onView={setView}
      startAccessor="start"
      endAccessor="end"
      views={{ day: true, week: true, month: true }}
      components={{
        week: {
          header: CustomDateHeader, // custom header
        },
        day: {
          header: CustomDateHeader, //  for day view too
        },
         
      }}
      style={{ height: 600 }}
      toolbar={false}
    />
    </div>
  );
}
