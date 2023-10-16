export function OutfitsIndex(props) {
  return (
    <div>
      <h1>All outfits</h1>
      {props.outfits.map((outfit) => (
        <div key={outfit.id}>
          <h2>{outfit.day}</h2>
          {/* <img src={outfit.url} /> */}
          <p>Top: {outfit.top_id}</p>
          <p>Bottom: {outfit.bottom_id}</p>
        </div>
      ))}
    </div>
  );
}
