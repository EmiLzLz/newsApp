export async function ajax(props) {
  let { url, cbSuccess } = props;

  /* The `await fetch(url, cbSuccess)` is making a network request to the specified `url` and waiting
  for the response. The response is then checked to see if it is ok, and if so, it is converted to
  JSON format. The resulting JSON data is then passed to the `cbSuccess` function. If there is an
  error with the request, the `catch` block is executed and an error message is displayed on the
  page. */
  await fetch(url, cbSuccess)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => cbSuccess(json))
    .catch((err) => {
      let message = err.status.text || "Error with api";
      
      document.getElementById("main").innerHTML = `
      <div class="error">
        <img src="app/assets/error.png" alt="error"> 
        <div class="message">
            <h1>SOMETHING WENT <br> WRONG</h1>
            <p>Error ${err.status} : ${message}</p>
        </div>
      </div>
      `;

      document.querySelector(".loader").style.display = "none";
    });
};
