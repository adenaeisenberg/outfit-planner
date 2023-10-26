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
    // <div>
    //   <h1>All outfits</h1>
    //   {props.outfits.map((outfit) => (
    //     <div key={outfit.id}>
    //       <h2>{outfit.day}</h2>
    //       const top = props.tops.find((top) => top.id === outfit.top_id); )

    //       {top && (
    //         <div>
    //           <p>Top: {top.image_url}</p>
    //           <img src={top.image_url} alt={top.name} />
    //         </div>
    //       )}
    //       {/* 
    //       <p>Top: {props.tops.image_url}</p>
    //       {props.tops.map((top) => ( if (top.id === outfit.top_id) )) } */}
    //       {/* <img src={outfit.top.image_url} /> */}
    //       <p>Bottom: {outfit.bottom_id}</p>
    //     </div>
      ))}

      <OutfitsNew tops={props.tops} onCreateOutfit={handleCreateOutfit} bottoms={props.bottoms} />
    </div>
  );
}
