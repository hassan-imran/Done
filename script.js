
var users = [['guest', 'Guest123'], ['admin', 'Admin123']];

function verify() {
    var a = document.getElementById("userName").value;
    var b = document.getElementById("userPass").value;
    var x = 0;
    for (var i = 0; i < users.length; i++) {
        if (users[i][0] === a && users[i][1] === b) {
            var accountKey = i;
            window.location.assign("home.html");
            localStorage.setItem("account", accountKey);
        }
        else {
            x = -1;
        }
    }
    if (x === -1) {
        document.getElementById("invalid").style.display = "block";
        document.getElementById("userPass").value = "";
    }
}

function signUp() {
    var a = document.getElementById("userName").value.toLowerCase();
    var b = document.getElementById("userPass").value;
    if (!a) {
        document.getElementById("invalid_id").style.display = "block";
    }
    else {
        for (var i = 0; i < users.length; i++) {
            if (users[i][0].toLowerCase === a) {
                document.getElementById("already").style.display = "block";
            }
        }
    }

    if (!b) {
        document.getElementById("invalid_pass").style.display = "block";
    }

}
