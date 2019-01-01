// Keep everything in a namespace so that there're no conflicts
var Auth = (function() {
    var publicFunctions = {};
    
    var GoogleAuth;
    var isAuthorized = false;

    // Load Google API auth2 modules
    function loadClient() {
        gapi.load("client:auth2", this.initClient);
    }
        
    // Initialize Google API Client
    function initClient() {
        gapi.client.init({
            "clientId": "752165490166-rrh2erpshokg2enq6afu70csmi3h5ikr.apps.googleusercontent.com",
            "scope": "profile"
        }).then(function() {
            this.GoogleAuth = gapi.auth2.getAuthInstance();
            // Call after_signin after signing in
            this.GoogleAuth.isSignedIn.listen(updateStatus);
        });
    }

    // Update Sign In Status
    function updateStatus(signedIn) {
        if (signedIn) {
            this.isAuthorized = true;   
        } else {
            this.isAuthorized = false;
        }
    }k

    // Public Handle
    publicFunctions.signIn = function() {
        this.loadClient();
    };
    
    return publicFunctions;
})();
k
