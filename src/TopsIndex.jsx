/* eslint-disable react/prop-types */
import { TopsNew } from "./TopsNew";
import axios from "axios";
import {} from "bootstrap";

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
      <div className="row">
        {props.tops.map((top) => (
          <div key={top.id} className="card" style={{ width: "18rem" }}>
            {/* THIS IS SUPPOSED TO BE IN LINE ABOVE-- GETTING ERRORS? ---- style="width: 18rem" */}
            <img className="card-img-top" src={top.image_url} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{top.name}</h5>
              {/* <p className="card-text"> Insert text here</p> */}
              <a href="#" className="btn btn-primary">
                Wear this top!
              </a>
            </div>
          </div>
        ))}
      </div>

      <TopsNew onCreateTop={handleCreateTop} />
    </div>
  );
}
