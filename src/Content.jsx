import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { OutfitsIndex } from "./OutfitsIndex";
import { TopsIndex } from "./TopsIndex";
import { BottomsIndex } from "./BottomsIndex";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { addDays, eachDayOfInterval, isSameDay, subDays } from "date-fns";

export function Content() {
  // Outfit section //
  const [outfits, setOutfits] = useState([]);

  const handleIndexOutfits = () => {
    console.log("handleIndexOutfits");
    axios.get("http://localhost:3000/outfits.json").then((response) => {
      console.log(response.data);
      setOutfits(response.data);
    });
  };

  useEffect(handleIndexOutfits, []);

  // Tops section //
  const [tops, setTops] = useState([]);

  const handleIndexTops = () => {
    console.log("handleIndexTops");
    axios.get("http://localhost:3000/tops.json").then((response) => {
      console.log(response.data);
      setTops(response.data);
    });
  };

  useEffect(handleIndexTops, []);

  // Bottom section

  const [bottoms, setBottoms] = useState([]);

  const handleIndexBottoms = () => {
    console.log("handleIndexBottoms");
    axios.get("http://localhost:3000/bottoms.json").then((response) => {
      console.log(response.data);
      setBottoms(response.data);
    });
  };

  useEffect(handleIndexBottoms, []);

  //  Calendar:

  // https://www.youtube.com/watch?v=WutUO81wE90
  const [date, setDate] = useState(new Date());

  const today = new Date();
  const numberOfDays = 30; // Adjust this number based on how many days you want

  const pastDates = Array.from({ length: numberOfDays }, (_, index) => subDays(today, index + 1));
  const futureDates = Array.from({ length: numberOfDays }, (_, index) => addDays(today, index));

  const allDates = [...pastDates, today, ...futureDates];

  function tileContent({ date, view }) {
    // Add class to tiles in month view only
    if (view === "month") {
      // Check if a date React-Calendar wants to check is on the list of dates to add class to
      if (allDates.find((d) => isSameDay(d, date))) {
        return "My content";
      }
    }
  }

  // function tileContent({ date, view }) {
  //   // Add class to tiles in month view only
  //   if (view === "month") {
  //     // Check if a date React-Calendar wants to check is on the list of dates to add class to
  //     if (datesToAddContentTo.find((dDate) => date.getDay() === dDate.getDate())) {
  //       return "My content";
  //     }
  //   }
  // }

  // tileContent={({ outfit, date, view }) => (view === "month" && date.getDay() === 0 ? <p>It's Sunday!</p> : null)} // this is where I need to put the logic about pulling the specific day's outfit

  const onChange = (date) => {
    setDate(date);
  };

  // this useEffect fires every time the date changes
  useEffect(() => {
    console.log(date);

    // if date ===
  }, [date]);
  // query database to see if outfit is saved for this date. if so, render it. (use if statement).

  return (
    <div className="container">
      <h1>TrendTracker, CodeCloset,</h1>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tops" element={<TopsIndex tops={tops} setTops={setTops} />} />
        <Route path="/bottoms" element={<BottomsIndex bottoms={bottoms} setBottoms={setBottoms} />} />
        <Route
          path="/outfits"
          element={<OutfitsIndex outfits={outfits} setOutfits={setOutfits} tops={tops} bottoms={bottoms} date={date} />}
        />
      </Routes>
      <Calendar
        onChange={onChange}
        value={date}
        onClickDay={(day) => setDate(day)}
        calendarType={"hebrew"} // calendar goes from Sun- Sat instead of Mon-Sun
        minDetail={"year"} // can change this to "century" or "month"
        navigationLabel={({ date, locale }) => `Today is: ${date.toLocaleDateString(locale)}`} // this isn't quite working
        next2Label={false} // user can't click to next year
        prev2Label={false} // user can't click to prev year
        tileContent={tileContent}

        // tileContent={({ outfit, date, view }) => (view === "month" && date.getDay() === 0 ? <p>It's Sunday!</p> : null)} // this is where I need to put the logic about pulling the specific day's outfit

        // outfits.map((outfit) => (view === "month" && date === outfit.day ? {outfit.top} {outfit.bottom} : null))
      />
      <button>Today</button>
      {/* onClick= brings user back to current month */}
    </div>
  );
}
