/* eslint-disable react/prop-types */
import { BottomsNew } from "./BottomsNew";
import axios from "axios";

import "./Button_89.css";

export function BottomsIndex(props) {
  const handleCreateBottom = (params, successCallback) => {
    console.log("handleCreateBottom", params);
    axios.post("http://localhost:3000/bottoms.json", params).then((response) => {
      props.setBottoms([...props.bottoms, response.data]);
      successCallback();
    });
  };

  return (
    <div>
      <h1>All Bottoms</h1>
      <BottomsNew onCreateBottom={handleCreateBottom} />
      <br />
      <div className="row">
        {props.bottoms.map((bottom) => (
          <div key={bottom.id} className="card" style={{ width: "18rem" }}>
            <img className="card-img-bottom" src={bottom.image_url} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{bottom.name}</h5>
            </div>
            <a href="/outfits" className="button-89">
              Wear this bottom!
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
