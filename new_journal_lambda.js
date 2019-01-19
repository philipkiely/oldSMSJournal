// This might have to be in JS due to the use of the JS Cognito SDK

function newJournal(token, journalName, journalId) {
		var params = { AccessToken: token };
		var cognitoProvider = new AWS.CognitoIdentityServiceProvider();
		
		cognitoProvider.getUser(params, function(err, data) {
				if (err) {
						// Report an error here
				} else {
						var journalDict = data.UserAttributes["custom:JournalDict"].value; // Working on plane, no wifi, don't know actual field name
						journalName = String.toLowerCase(journalName); // Firefox says to use String.prototypes.toLowerCase instead, but that's not working and I have no wifi
						var journal = journalName + ":" + journalId;
						journalDict += journal;
						if journalDict.length > 2048 {
								// Report an error here
						} else {
								
