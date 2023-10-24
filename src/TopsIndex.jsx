/* eslint-disable react/prop-types */
import { TopsNew } from "./TopsNew";
import axios from "axios";

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
      {props.tops.map((top) => (
        <div key={top.id} className="card" style={{ width: "18rem" }}>
          {/* THIS IS SUPPOSED TO BE IN LINE ABOVE-- GETTING ERRORS? ---- style="width: 18rem" */}
          <img className="card-img-top" src={top.image_url} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{top.name}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the cards content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      ))}

      <TopsNew onCreateTop={handleCreateTop} />
    </div>
  );
}

// {props.tops.map((top) => (
//   <div key={top.id}>
//     <h2>{top.name}</h2>
//     <img src={top.image_url} width={300} />
//   </div>
// ))}
