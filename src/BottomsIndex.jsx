/* eslint-disable react/prop-types */
import { BottomsNew } from "./BottomsNew";
import axios from "axios";

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
      {props.bottoms.map((bottom) => (
        <div key={bottom.id}>
          <h2>{bottom.name}</h2>
          <img src={bottom.image_url} width={300} />
        </div>
      ))}

      <BottomsNew onCreateBottom={handleCreateBottom} />
    </div>
  );
}
