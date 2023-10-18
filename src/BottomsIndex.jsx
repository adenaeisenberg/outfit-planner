export function BottomsIndex(props) {
  return (
    <div>
      <h1>All Bottoms</h1>
      {props.bottoms.map((bottom) => (
        <div key={bottom.id}>
          <h2>{bottom.name}</h2>
          <img src={bottom.image_url} width={300} />
        </div>
      ))}
    </div>
  );
}
