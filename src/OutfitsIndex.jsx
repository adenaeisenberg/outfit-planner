/* eslint-disable react/prop-types */
import axios from "axios";
import { OutfitsNew } from "./OutfitsNew";
import "bootstrap/dist/css/bootstrap.min.css";

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

      <OutfitsNew tops={props.tops} onCreateOutfit={handleCreateOutfit} bottoms={props.bottoms} date={props.date} />

      <div className="row">
        {props.outfits.map((outfit) => (
          <div key={outfit.id} className="card text-center" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">{outfit.day}</h5>
              <img className="card-img-top" src={outfit.top.image_url} alt="Top" />
              <img className="card-img-top" src={outfit.bottom.image_url} alt="Bottom" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
