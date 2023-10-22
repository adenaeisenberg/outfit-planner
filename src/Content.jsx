import { Routes, Route } from "react-router-dom";

import { OutfitsIndex } from "./OutfitsIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { OutfitsNew } from "./OutfitsNew";
import { TopsIndex } from "./TopsIndex";
import { BottomsIndex } from "./BottomsIndex";

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

  const handleCreateOutfit = (params, successCallback) => {
    console.log("handleCreateOutfit", params);
    axios.post("http://localhost:3000/outfits.json", params).then((response) => {
      setOutfits([...outfits, response.data]);
      successCallback();
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

  return (
    <div className="container">
      <h1>Outfit Planner App</h1>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tops" element={<TopsIndex tops={tops} setTops={setTops} />} />
        <Route path="/bottoms" element={<BottomsIndex bottoms={bottoms} setBottoms={setBottoms} />} />
        <Route path="/outfits" element={<OutfitsIndex outfits={outfits} />} />
      </Routes>
      <OutfitsNew onCreateOutfit={handleCreateOutfit} />
      <OutfitsIndex outfits={outfits} />
    </div>
  );
}
