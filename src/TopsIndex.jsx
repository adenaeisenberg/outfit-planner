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
        <div key={top.id}>
          <h2>{top.name}</h2>
          <img src={top.image_url} width={300} />
        </div>
      ))}

      <TopsNew onCreateTop={handleCreateTop} />
    </div>
  );
}
