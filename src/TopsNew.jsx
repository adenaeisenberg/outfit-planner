/* eslint-disable react/prop-types */
export function TopsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateTop(params, () => event.target.reset());
  };

  return (
    <div>
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
    </div>
  );
}
