export function OutfitsNew() {
  return (
    <div>
      <h1>New Outfit</h1>
      <form>
        <div>
          Day: <input name="day" type="text" />
        </div>
        <div>
          Top: <input name="top_id" type="text" />
        </div>
        <div>
          Bottom: <input name="bottom_id" type="text" />
        </div>
        <div>
          User_id: <input name="user_id" type="text" />
        </div>
        <button type="submit">Add Outfit to Wardrobe</button>
      </form>
    </div>
  );
}
