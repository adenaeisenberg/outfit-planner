import { OutfitsIndex } from "./OutfitsIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { OutfitsNew } from "./OutfitsNew";
import { TopsIndex } from "./TopsIndex";

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

  // Tops section

  return (
    <div>
      <h1>Outfit Planner App</h1>
      <Signup />
      <Login />
      <LogoutLink />
      <OutfitsNew onCreateOutfit={handleCreateOutfit} />
      <OutfitsIndex outfits={outfits} />
      <TopsIndex tops={tops} />
    </div>
  );
}
