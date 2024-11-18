var client_id = "abe527c9c9ce47dcb42b58e0713be4fa";
var redirect_uri = "http://localhost:5173/";

var state = generateRandomString(16);

localStorage.setItem(stateKey, state);
var scope =
  "user-read-private user-read-email user-read-recently-played user-read-playback-state user-modify-playback-state user-read-currently-playing user-library-modify user-library-read playlist-read-private playlist-modify-public playlist-modify-public user-read-playback-position user-top-read ugc-image-upload";

var url = "https://accounts.spotify.com/authorize";
url += "?response_type=token";
url += "&client_id=" + encodeURIComponent(client_id);
url += "&scope=" + encodeURIComponent(scope);
url += "&redirect_uri=" + encodeURIComponent(redirect_uri);
url += "&state=" + encodeURIComponent(state);

let login = document.getElementById("login");

login.addEventListener("click", function () {
  console.log("login?");
  window.location.href = url;
});
