/* eslint-disable react/prop-types */

import "./Dropdown.css";

export function OutfitsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(props);
    const params = new FormData(event.target);
    props.onCreateOutfit(params, () => event.target.reset());
  };

  return (
    <div className="card w-100">
      <div className="card text-center">
        <div className="card-body">
          <h1 className="card-title">New Outfit</h1>
          <form onSubmit={handleSubmit}>
            <div>
              Day: <input name="day" type="text" />
            </div>

            <div className="dropdown">
              Top:
              <select className="dropbtn" name="top_id" id="tops">
                {props.tops.map((top) => (
                  <option
                    value={top.id}
                    key={top.id}
                    onMouseEnter={console.log("works")}
                    onMouseLeave={() => this.removeTopImage}
                  >
                    {top.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="dropdown">
              Bottom:
              <select className="dropbtn" name="bottom_id" id="bottoms">
                {props.bottoms.map((bottom) => (
                  <option value={bottom.id} key={bottom.id}>
                    {bottom.name}
                  </option>
                ))}
              </select>
            </div>
            <br />
            <button className="btn btn-primary" type="submit">
              Add Outfit to Wardrobe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
