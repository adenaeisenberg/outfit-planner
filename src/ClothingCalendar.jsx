import { useState, useEffect } from "react";
import axios from "axios";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
// import { addDays, isSameDay, subDays } from "date-fns";

export function ClothingCalendar() {
  // https://www.youtube.com/watch?v=WutUO81wE90
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  useEffect(() => {
    console.log(date);
    axios.get("http://localhost:3000/outfits.json").then((response) => {
      // response.data; // This line doesn't seem to do anything
      console.log(response);

      for (let i = 0; i < response.data.length; i++) {
        console.log(response.data[i]); // Print each item in the response data array
      }
    });
  }, [date]);

  return (
    <>
      <Calendar
        onChange={onChange}
        value={date}
        onClickDay={(day) => setDate(day)}
        calendarType={"hebrew"} // calendar goes from Sun- Sat instead of Mon-Sun
        minDetail={"year"} // can change this to "century" or "month"
        navigationLabel={({ date, locale }) => `Today is: ${date.toLocaleDateString(locale)}`} // this isn't quite working
        next2Label={false} // user can't click to next year
        prev2Label={false} // user can't click to prev year
        // tileContent={tileContent}
      />
      <button>Today</button>
    </>
    // {/* onClick= brings user back to current month */}
  );
}

// const today = new Date();
//   const numberOfDays = 30; // Adjust this number based on how many days you want

//   const pastDates = Array.from({ length: numberOfDays }, (_, index) => subDays(today, index + 1));
//   const futureDates = Array.from({ length: numberOfDays }, (_, index) => addDays(today, index));

//   const allDates = [...pastDates, today, ...futureDates];

//   function tileContent({ date, view }) {
//     // Add class to tiles in month view only
//     if (view === "month") {
//       // Check if a date React-Calendar wants to check is on the list of dates to add class to
//       if (allDates.find((d) => isSameDay(d, date))) {
//         return "My content";
//       }
//     }
//   }

//   // function tileContent({ date, view }) {
//   //   // Add class to tiles in month view only
//   //   if (view === "month") {
//   //     // Check if a date React-Calendar wants to check is on the list of dates to add class to
//   //     if (datesToAddContentTo.find((dDate) => date.getDay() === dDate.getDate())) {
//   //       return "My content";
//   //     }
//   //   }
//   // }

//   // tileContent={({ outfit, date, view }) => (view === "month" && date.getDay() === 0 ? <p>It's Sunday!</p> : null)} // this is where I need to put the logic about pulling the specific day's outfit
