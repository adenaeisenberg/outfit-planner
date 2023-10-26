/* eslint-disable react/prop-types */
export function TopsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateTop(params, () => event.target.reset());
  };

  return (
    <div className="card w-100">
      <div className="card-body">
        <h3 className="card-title">Add Top</h3>
        <form onSubmit={handleSubmit}>
          <div>
            Name: <input name="name" type="text" />
          </div>
          <div>
            Image Url: <input name="image_url" type="text" />
          </div>
          <button className="btn btn-primary" type="submit">
            Add Top
          </button>
        </form>
      </div>
    </div>
  );
  // }

  // <div className="card w-100">
  //     <h5 className="card-title">Card title</h5>
  //     <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
  //   </div>
  // </div>;

  // {
  /* <div>
<h1>Add Top</h1>
<form onSubmit={handleSubmit}>
  <div>
    Name: <input name="name" type="text" />
  </div>
  <div>
    Image Url: <input name="image_url" type="text" />
  </div>
  <button type="submit">Add Top</button>
</form>
</div> */
}
