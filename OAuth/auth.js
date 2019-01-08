// Keep everything in a namespace so that there're no conflicts
var Auth = (function() {
    var GoogleAuth;
    var isAuthorized = false;

    // Load Google API auth2 modules
    function loadClient() {
        gapi.load("auth2", initClient);
    }

		// Set GoogleAuth
		function setAuth() {
				GoogleAuth = gapi.auth2.getAuthInstance();
				GoogleAuth.isSignedIn.listen(updateStatus);
				var status = GoogleAuth.isSignedIn.get();
				updateStatus(status);
		}
		
    // Initialize Google API Client
    function initClient() {
        gapi.auth2.init({
						// This clientId is ONLY to be used in development, not production
						// To use it, set really-this-is-localhost.com to point to 127.0.0.1 in your hosts file
						// Run a local webserver (I use the python http.server) and go to really-this-is-localhost.com to test it
            "clientId": "752165490166-j74ipne57mdk7la4vuv97d2i434ibjar.apps.googleusercontent.com",
            "scope": "profile https://www.googleapis.com/auth/documents",
						"discoveryDocs": "https://www.googleapis.com/discovery/v1/apis?name=scripts"
        }).then(setAuth);
    }

    // Update Sign In Status
    function updateStatus(signedIn) {
				var btn = document.getElementById("sign-in");
				var txt = document.getElementById("text");
				var info = document.getElementById("info");
        if (signedIn) {
            isAuthorized = true;
						btn.onclick = revoke;
						btn.innerHTML = "Revoke access!";
						txt.innerHTML = "Authorized!";
						var user = GoogleAuth.currentUser.get();
						var profile = user.getBasicProfile();
						var name = profile.getName();
						var email = profile.getEmail();
						info.innerHTML = "Name: " + name + "<br>Email: " + email;
        } else {
						isAuthorized = false;
						btn.onclick = signIn;
						btn.innerHTML = "Grant access!";
						txt.innerHTML = "Unauthorized!";
						info.innerHTML = " ";
        }
    }

		// Revoke access to google account
		function revoke() {
				GoogleAuth.disconnect();
		}

		// Grant access to google account
		function signIn() {
				GoogleAuth.signIn();
		}
		
    return {loadClient, signIn, isAuthorized, GoogleAuth};
})();
Auth.loadClient();
