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

  console.log(<Calendar />);
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
        calendarType={"hebrew"}
        minDetail={"year"} // can change this to "century" or "month"
        navigationLabel={({ date, label, locale, view }) =>
          `Current view: ${view}, date: ${date.toLocaleDateString(locale)}`
        }
      />
    </div>
  );
}
