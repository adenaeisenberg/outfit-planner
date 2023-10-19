import { TopsNew } from "./TopsNew";

/* eslint-disable react/prop-types */
export function TopsIndex(props) {
  return (
    <div>
      <h1>All Tops</h1>
      {props.tops.map((top) => (
        <div key={top.id}>
          <h2>{top.name}</h2>
          <img src={top.image_url} width={300} />
        </div>
      ))}

      <TopsNew />
    </div>
  );
}
