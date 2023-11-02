/* eslint-disable react/prop-types */
import axios from "axios";
import { OutfitsNew } from "./OutfitsNew";
// import { compareAsc, format } from "date-fns";

export function OutfitsIndex(props) {
  const handleCreateOutfit = (params, successCallback) => {
    console.log("handleCreateOutfit", params);
    axios.post("http://localhost:3000/outfits.json", params).then((response) => {
      props.setOutfits([...props.outfits, response.data]);
      successCallback();
    });
  };

  console.log(props.date); // not sure what this is doing here. We were testing something out- can't remember what-- i think whether date got passed this far

  return (
    <div>
      <h1>All outfits</h1>
      {props.outfits.map((outfit) => (
        <div key={outfit.id}>
          <h2>{outfit.day}</h2>
          {/* <h2>{format({outfit.day}, 'dd-MM-yyyy')}</h2> */}
          <p>Top: {outfit.top.name}</p>
          <img src={outfit.top.image_url} width={300} />
          <p>Bottom: {outfit.bottom.name}</p>
          <img src={outfit.bottom.image_url} width={300} />
        </div>
      ))}

      <OutfitsNew tops={props.tops} onCreateOutfit={handleCreateOutfit} bottoms={props.bottoms} date={props.date} />
    </div>
  );
}
