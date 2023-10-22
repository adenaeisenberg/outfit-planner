/* eslint-disable react/prop-types */

import "./Dropdown.css";

export function OutfitsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateOutfit(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Outfit</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Day: <input name="day" type="text" />
        </div>

        <div className="dropdown">
          Top:
          <select className="dropbtn" name="top_id" id="tops">
            {props.tops.map((top) => (
              <option value={top.id} key={top.id}>
                <img
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20200630132503/iflag.jpg"
                  width="20"
                  height="15"
                />
                {top.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          Bottom: <input name="bottom_id" type="text" />
        </div>
        <button type="submit">Add Outfit to Wardrobe</button>
      </form>
    </div>
  );
}
