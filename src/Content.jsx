import { OutfitsIndex } from "./OutfitsIndex";

export function Content() {
  const outfits = [
    { id: 1, day: "Sunday", top_id: 1, bottom_id: 1 },
    { id: 2, day: "Monday", top_id: 1, bottom_id: 2 },
  ];

  return (
    <div>
      <h1>Outfit Planner App</h1>
      <OutfitsIndex outfits={outfits} />
    </div>
  );
}
