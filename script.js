
var users = [['guest', 'Guest123'], ['admin', 'Admin123']];

function verify() {
    var a = document.getElementById("userName").value;
    var b = document.getElementById("userPass").value;
    var x = false;
    for (var i = 0; i < users.length; i++) {
        if (users[i][0].toLowerCase() === a.toLowerCase() && users[i][1] === b) {
            var accountKey = i;
            localStorage.setItem("account", accountKey);
            localStorage.setItem("users", JSON.stringify(users));
            window.location.assign("home.html");
            x = true;
            break;
        }
    }

    if (!x) {
        document.getElementById("invalid").style.display = "block";
        document.getElementById("userPass").value = "";
    }
}

function signUp() {
    var a = document.getElementById("userName").value;
    var b = document.getElementById("userPass").value;
    var c = true;
    if (!a) {
        document.getElementById("invalid_id").style.display = "block";
        c = false;
    }

    else if (!b) {
        document.getElementById("invalid_pass").style.display = "block";
        c = false;
    }

    else {
        for (var i = 0; i < users.length; i++) {
            if (users[i][0].toLowerCase() === a.toLowerCase()) {
                document.getElementById("already").style.display = "block";
                c = false;
                break;
            }
        }
    }

    if (c) {
        var x = users.push([a, b]);
        localStorage.setItem("account", x - 1);
        localStorage.setItem("users", JSON.stringify(users));
        window.location.replace("home.html");
    }
}


/* Functions for home page */


