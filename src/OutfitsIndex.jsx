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

  console.log(props.date); // not sure what this is doing here. We were testing something out- can't remember what-- i think whether date got passed this far

  return (
    <div>
      <h1>All outfits</h1>

      <div className="card bg-dark text-white">
        <img className="card-img" src="..." alt="Card image" />
        <div className="card-img-overlay">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is
            a little bit longer.
          </p>
          <p className="card-text">Last updated 3 mins ago</p>
        </div>
      </div>

      {props.outfits.map((outfit) => (
        <div key={outfit.id}>
          <h2>{outfit.day}</h2>
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

// {props.outfits.map((outfit) => (
//   <div key={outfit.id}>
//     <h2>{outfit.day}</h2>
//     <p>Top: {outfit.top.name}</p>
//     <img src={outfit.top.image_url} width={300} />
//     <p>Bottom: {outfit.bottom.name}</p>
//     <img src={outfit.bottom.image_url} width={300} />
//   </div>
// )
