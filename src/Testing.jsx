export function Testing() {
  return (
    <html lang="en">
      <head>
        {/* <!-- Required meta tags --> */}
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        {/* <!-- Bootstrap CSS --> */}
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossOrigin="anonymous"
        />

        {/* <!-- Optional JavaScript -->
      <!-- jQuery first, then Popper.js,  
          then Bootstrap JS --> */}
        <script
          src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
          integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
          crossOrigin="anonymous"
        ></script>

        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
          integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
          crossOrigin="anonymous"
        ></script>

        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
          integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
          crossOrigin="anonymous"
        ></script>
      </head>

      <body>
        <center>
          <h1 style="color: green">GeeksforGeeks</h1>

          <div className="dropdown">
            <button
              className="btn btn-success  
                      dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Country Flags
            </button>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li className="dropdown-item">
                <img
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20200630132503/iflag.jpg"
                  width="20"
                  height="15"
                />{" "}
                India
              </li>
              <li className="dropdown-item">
                <img
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20200630132504/uflag.jpg"
                  width="20"
                  height="15"
                />{" "}
                USA
              </li>
              <li className="dropdown-item">
                <img
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20200630132502/eflag.jpg"
                  width="20"
                  height="15"
                />{" "}
                England
              </li>
              <li className="dropdown-item">
                <img
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20200630132500/bflag.jpg"
                  width="20"
                  height="15"
                />{" "}
                Brazil
              </li>
            </ul>
          </div>
        </center>
      </body>
    </html>
  );
}
