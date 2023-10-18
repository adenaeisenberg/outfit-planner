export function TopsNew() {
  return (
    <div>
      <h1>Add Top</h1>
      <form>
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
