
var users = [];
var remindUser = [];

function checkLocal() {
    var a = JSON.parse(localStorage.getItem("users"));
    if (a === undefined || a === null) {
        users = [['guest', 'Guest123'], ['admin', 'Admin123']];
        remindUser = [[], []];
    }
    else{
        users = a;
        remindUser = JSON.parse(localStorage.getItem("reminders"));
    }
}

checkLocal();

function verify() {
    var a = document.getElementById("userName").value;
    var b = document.getElementById("userPass").value;
    var x = false;
    for (var i = 0; i < users.length; i++) {
        if (users[i][0].toLowerCase() === a.toLowerCase() && users[i][1] === b) {
            var accountKey = i;
            localStorage.setItem("account", accountKey);
            localStorage.setItem("users", JSON.stringify(users));
            localStorage.setItem("reminders", JSON.stringify(remindUser));
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
        remindUser.push([]);
        localStorage.setItem("account", x - 1);
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("reminders", JSON.stringify(remindUser));
        window.location.replace("home.html");
    }
}

