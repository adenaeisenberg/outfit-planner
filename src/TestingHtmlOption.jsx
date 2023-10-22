import "./Dropdown.css";

export function TestingHtmlOption() {
  return (
    <>
      <head>
        <title>Adding image to dropdown list</title>
      </head>
      <body>
        <center>
          <h1 style="color: green">GeeksforGeeks</h1>

          <div className="dropdown">
            <button className="dropbtn">Country Flags</button>

            <div className="dropdown-content">
              <a href="#">
                <img
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20200630132503/iflag.jpg"
                  width="20"
                  height="15"
                />{" "}
                India{" "}
              </a>

              <a href="#">
                <img
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20200630132504/uflag.jpg"
                  width="20"
                  height="15"
                />{" "}
                USA
              </a>
              <a href="#">
                <img
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20200630132502/eflag.jpg"
                  width="20"
                  height="15"
                />{" "}
                England
              </a>
              <a href="#">
                <img
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20200630132500/bflag.jpg"
                  width="20"
                  height="15"
                />{" "}
                Brazil
              </a>
            </div>
          </div>
        </center>
      </body>
    </>
  );
}
