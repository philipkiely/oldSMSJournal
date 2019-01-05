//Google Docs Init
//document.getElementById('gDoc').appendChild('p')
//="<b>1/1/2000 12:00 AM</b>";

function SMSJTitle(){
    //Uses a typewriter effect to expand the header text
    var texts = ['Send ', 'My', 'Self ', 'J'];
    //typing function
    function type(txt, i=0) {
        if (i < txt.length) { //with timeout this is a while loop
            if (i == 0) {
                document.getElementById("Title"+txt.trim()).innerHTML = "<span id='TitleFirst" + txt.trim() + "'>" + txt.charAt(i) + "</span>";
                document.getElementById("TitleFirst"+txt.trim()).classList.add("first-letter-title")
            } else {
                document.getElementById("Title"+txt.trim()).innerHTML += txt.charAt(i);
            }
            setTimeout(function(){type(txt, i+1)}, 300);
        }
    }
    //call typing function on each text span
    function typeCaller(t, i=0){
        type(t[i]);
        if (i == 1) {
            setTimeout(function(){typeCaller(t, i+1)}, 600);
        } else if (i < 4) {
            setTimeout(function(){typeCaller(t, i+1)}, 1500);
        }
    }
    //wait a couple seconds on load.
    setTimeout(function(){typeCaller(texts);}, 2000);
}

window.onload = SMSJTitle();

function setYear() {
    document.getElementById("year").innerHTML = (new Date()).getFullYear();
}

window.onload = setYear();

function beginSignup() {
    document.getElementById("signupArea").innerHTML = '<h4 class="card-header">Phone Number</h4><div class="card-body"><p>To get started, please enter and confirm your phone number.</p><form><input class="form-control" type="tel" required id="phoneNumber"><br><input class="form-control" type="tel" required id="phoneNumberConfirm"></form></div><div class="card-footer"><a onclick="getGoogle()" class="btn btn-primary cardButton">Next</a></div>'
    document.getElementById("phoneNumber").placeholder = "Phone Number";
    document.getElementById("phoneNumberConfirm").placeholder = "Confirm Phone Number";
}
