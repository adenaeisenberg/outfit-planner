import { OutfitsIndex } from "./OutfitsIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { OutfitsNew } from "./OutfitsNew";
import { TopsIndex } from "./TopsIndex";
import { TopsNew } from "./TopsNew";
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
    console.log("handleCreatePhoto", params);
    axios.post("http://localhost:3000/outfits.json", params).then((response) => {
      setOutfits([...outfits, response.data]);
      successCallback();
    });
  };

  useEffect(handleIndexOutfits, []);

  // Tops section //
  const [tops, setTops] = useState([]);

  const handleCreateTop = (params, successCallback) => {
    console.log("handleCreateTop", params);
    axios.post("http://localhost:3000/tops.json", params).then((response) => {
      setTops([...tops, response.data]);
      successCallback();
    });
  };

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
    <div>
      <h1>Outfit Planner App</h1>
      <Signup />
      <Login />
      <LogoutLink />
      <OutfitsNew onCreateOutfit={handleCreateOutfit} />
      <OutfitsIndex outfits={outfits} />
      <TopsNew onCreateTop={handleCreateTop} />
      <TopsIndex tops={tops} />
      <BottomsIndex bottoms={bottoms} />
    </div>
  );
}
