/* eslint-disable react/prop-types */
import axios from "axios";
import { OutfitsNew } from "./OutfitsNew";

export function OutfitsIndex(props) {
  const handleCreateOutfit = (params, successCallback) => {
    console.log("handleCreateOutfit", params);
    axios.post("http://localhost:3000/outfits.json", params).then((response) => {
      props.setOutfits([...props.outfits, response.data]);
      successCallback();
    });
  };

  return (
    <div>
      <h1>All outfits</h1>
      {props.outfits.map((outfit) => (
        <div key={outfit.id}>
          <h2>{outfit.day}</h2>
          {/* <p>Top: {outfit.top.image_url}</p> */}
          <img src={outfit.top.image_url} />
          <img src={outfit.bottom.image_url} />
          {/* <p>Bottom: {outfit.bottom.image_url}</p> */}
        </div>
      ))}

      <OutfitsNew tops={props.tops} onCreateOutfit={handleCreateOutfit} bottoms={props.bottoms} />
    </div>
  );
}
