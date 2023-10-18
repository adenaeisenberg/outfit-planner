import { OutfitsIndex } from "./OutfitsIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { OutfitsNew } from "./OutfitsNew";

export function Content() {
  const [outfits, setOutfits] = useState([]);

  const handleIndexOutfits = () => {
    console.log("handleIndexOutfits");
    axios.get("http://localhost:3000/outfits.json").then((response) => {
      console.log(response.data);
      setOutfits(response.data);
    });
  };

  useEffect(handleIndexOutfits, []);

  return (
    <div>
      <h1>Outfit Planner App</h1>
      <Signup />
      <Login />
      <LogoutLink />
      <OutfitsNew />
      <OutfitsIndex outfits={outfits} />
    </div>
  );
}
