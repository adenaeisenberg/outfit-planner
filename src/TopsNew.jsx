/* eslint-disable react/prop-types */

import "./Button_89.css";

export function TopsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateTop(params, () => event.target.reset());
  };

  return (
    <div className="card w-100">
      <div className="card text-center">
        <div className="card-body">
          <h3 className="card-title">Add Top</h3>
          <form onSubmit={handleSubmit}>
            <div>
              Name: <input name="name" type="text" />
            </div>
            {/* <div>
              Image Url: <input name="image_url" type="text" />
            </div> */}

            <label htmlFor="exampleFormControlFile1">Upload Top Image: </label>
            {/* <input name="image_url" type="file" className="form-control-file" id="exampleFormControlFile1" /> */}
            <input type="file" id="myFile" name="image_url" />

            <br />
            <button className="button-89" type="submit">
              Add Top
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
