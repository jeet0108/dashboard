import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";
import addMonths from "date-fns/addMonths";
import subMonths from "date-fns/subMonths";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales: { "en-US": enUS },
});

const CalendarPage = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Tile Design Consultation",
      start: new Date(2025, 2, 24, 10, 0),
      end: new Date(2025, 2, 24, 11, 0),
      type: "consultation",
    },
    {
      id: 2,
      title: "Porcelain Tile Delivery",
      start: new Date(2025, 2, 25, 14, 0),
      end: new Date(2025, 2, 25, 15, 30),
      type: "delivery",
    },
    {
      id: 3,
      title: "Meeting",
      start: new Date(2025, 2, 26, 13, 0),
      end: new Date(2025, 2, 26, 14, 0),
      type: "Meeting",
    },
  ]);

  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    end: "",
    type: "consultation",
  });

  const [view, setView] = useState("month"); 
  const [date, setDate] = useState(new Date()); 

  const handleAddEvent = (e) => {
    e.preventDefault();
    const event = {
      id: events.length + 1,
      title: newEvent.title,
      start: new Date(newEvent.start),
      end: new Date(newEvent.end),
      type: newEvent.type,
    };
    setEvents([...events, event]);
    setNewEvent({ title: "", start: "", end: "", type: "consultation" });
    toast.success("Event Added Successfully!", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const eventPropGetter = (event) => {
    const style = {
      backgroundColor:
        event.type === "consultation"
          ? "#425086"
          : event.type === "delivery"
          ? "#8B5E3C"
          : "#D4A017",
      color: "white",
      borderRadius: "4px",
      border: "none",
    };
    return { style };
  };

  const CustomToolbar = () => {
    const goToBack = () => {
      if (view === "month") {
        setDate(subMonths(date, 1));
      } else if (view === "week") {
        setDate((prev) => new Date(prev.setDate(prev.getDate() - 7)));
      } else if (view === "day") {
        setDate((prev) => new Date(prev.setDate(prev.getDate() - 1)));
      }
    };

    const goToNext = () => {
      if (view === "month") {
        setDate(addMonths(date, 1));
      } else if (view === "week") {
        setDate((prev) => new Date(prev.setDate(prev.getDate() + 7)));
      } else if (view === "day") {
        setDate((prev) => new Date(prev.setDate(prev.getDate() + 1)));
      }
    };

    const goToToday = () => {
      setDate(new Date());
    };

    const goToMonth = () => setView("month");
    const goToWeek = () => setView("week");
    const goToDay = () => setView("day");

    const label = () => {
      if (view === "month") {
        return format(date, "MMMM yyyy", { locale: enUS });
      } else if (view === "week") {
        const start = startOfWeek(date, { weekStartsOn: 1 });
        const end = new Date(start);
        end.setDate(start.getDate() + 6);
        return `${format(start, "MMM d", { locale: enUS })} - ${format(end, "MMM d, yyyy", { locale: enUS })}`;
      } else if (view === "day") {
        return format(date, "MMMM d, yyyy", { locale: enUS });
      }
    };

    return (
      <div className="rbc-toolbar">
        <div className="rbc-btn-group">
          <button onClick={goToBack} className="rbc-btn">
            Back
          </button>
          <button onClick={goToToday} className="rbc-btn">
            Today
          </button>
          <button onClick={goToNext} className="rbc-btn">
            Next
          </button>
        </div>
        <div className="rbc-toolbar-label">{label()}</div>
        <div className="rbc-btn-group">
          <button
            onClick={goToMonth}
            className={`rbc-btn ${view === "month" ? "rbc-active" : ""}`}
          >
            Month
          </button>
          <button
            onClick={goToWeek}
            className={`rbc-btn ${view === "week" ? "rbc-active" : ""}`}
          >
            Week
          </button>
          <button
            onClick={goToDay}
            className={`rbc-btn ${view === "day" ? "rbc-active" : ""}`}
          >
            Day
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      <div className=" mx-auto">
        <form
          onSubmit={handleAddEvent}
          className="mb-3 p-6 bg-white rounded-lg shadow-lg border border-gray-200"
        >
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Schedule an Event
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Event Title"
              value={newEvent.title}
              onChange={(e) =>
                setNewEvent({ ...newEvent, title: e.target.value })
              }
              className="border p-2 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
            <input
              type="datetime-local"
              value={newEvent.start}
              onChange={(e) =>
                setNewEvent({ ...newEvent, start: e.target.value })
              }
              className="border p-2 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
            <input
              type="datetime-local"
              value={newEvent.end}
              onChange={(e) =>
                setNewEvent({ ...newEvent, end: e.target.value })
              }
              className="border p-2 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
            <select
              value={newEvent.type}
              onChange={(e) =>
                setNewEvent({ ...newEvent, type: e.target.value })
              }
              className="border p-2 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="consultation">Consultation</option>
              <option value="delivery">Delivery</option>
              <option value="Meeting">Meeting</option>
            </select>
          </div>
          <button
            type="submit"
            className="mt-4 px-6 py-2  bg-[rgba(66,80,134,1)] text-white rounded-md hover:bg-blue-900 transition-colors"
          >
            Add Event
          </button>
        </form>

        <div className="bg-white rounded-lg shadow-lg p-4 border border-gray-200">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 600 }}
            view={view}
            onView={setView}
            date={date}
            onNavigate={(newDate) => setDate(newDate)}
            eventPropGetter={eventPropGetter}
            components={{
              toolbar: CustomToolbar,
            }}
          />
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default CalendarPage;