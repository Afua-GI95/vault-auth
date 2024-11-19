 var client_id = "abe527c9c9ce47dcb42b58e0713be4fa";
 var redirect_uri = "https://vault-lac.vercel.app/";

 let login = document.getElementById("login");

  login.addEventListener("click", function () {
    console.log("login?");
     window.location.href = url;
  });

function loginBtn() {
      console.log("login");

      // let stateKey;

      // console.log(localStorage.setItem(stateKey, state));
      // console.log(url);
      window.location.href = url;
    }


    function generateRandomString(length) {
      let result = "";
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      const charactersLength = characters.length;
      let counter = 0;
      while (counter < length) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
        counter += 1;
      }
      return result;
    }

    var state = generateRandomString(16);
    console.log(url);
    var scope =
      "user-read-private user-read-email user-read-recently-played user-library-modify user-library-read playlist-read-private playlist-modify-public";

    var url = "https://accounts.spotify.com/authorize";
    url += "?response_type=token";
    url += "&client_id=" + encodeURIComponent(client_id);
    url += "&scope=" + encodeURIComponent(scope);
    url += "&redirect_uri=" + encodeURIComponent(redirect_uri);
    url += "&state=" + encodeURIComponent(state);
    
    
