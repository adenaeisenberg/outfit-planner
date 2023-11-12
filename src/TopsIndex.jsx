/* eslint-disable react/prop-types */
import { TopsNew } from "./TopsNew";
import axios from "axios";
import "./Button_89.css";

export function TopsIndex(props) {
  const handleCreateTop = (params, successCallback) => {
    console.log("handleCreateTop", params);
    axios.post("http://localhost:3000/tops.json", params).then((response) => {
      props.setTops([...props.tops, response.data]);
      successCallback();
    });
  };

  return (
    <div>
      <h1>All Tops</h1>
      <TopsNew onCreateTop={handleCreateTop} />
      <br />
      <div className="row">
        {props.tops.map((top) => (
          <div key={top.id} className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <img className="card-img-top" src={top.image_url} alt="Card image cap" />
              <h5 className="card-title">{top.name}</h5>
            </div>
            <a href="/outfits" className="button-89">
              Wear this top!
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
