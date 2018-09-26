
var users = ["hassan", "guest"];
var passes = ["Hassan123", "Guest123"];

function login(a, b) {
    for (var i = 0; i < users.length; i++) {
        if ((a.toLowerCase() == users[i]) && (b == passes[i])) {
            document.getElementById("login").style = "display:none;";
            document.getElementById("internal").style = "display:block;";
        }
        else {
            document.getElementById("notValid").style = "display:block;";
        }
    }
}

function guest() {
    login("guest", "Guest123");
}

function logOut() {
    document.getElementById("internal").style = "display:none;";
    document.getElementById("login").style = "display:block;";
    document.getElementById("notValid").style = "display:none;";
}
function addIt() {
    document.getElementById("adding").style.display = "block";

}

function addRemind() {
    var a = document.getElementById("remindTitle").value;
    var b = document.getElementById("remindTime").value;
    var c = document.getElementById("remindMsg").value;

    if (a && b) {
        reminders.push([a, b, c]);
        update();
    }
    else {
        document.getElementById("remindTitle").style.boxShadow = "0 0 5px red";
        document.getElementById("remindTime").style.boxShadow = "0 0 5px red";
    }
}

function update() {
    document.getElementById("adding").style.display = "none";
    if (reminders.length == 0) {
        document.getElementById("reminderTable").style.display = "none";
        document.getElementById("noReminder").style.display = "block";
    }

    else {
        document.getElementById("reminderTable").style.display = "block";
        document.getElementById("reminderTableBody").innerHTML = "";
        document.getElementById("noReminder").style.display = "none";

        for (var i = 0; i < reminders.length; i++) {
            document.getElementById("reminderTableBody").innerHTML += "<tr id=row" + i + "><td>" + reminders[i][0] + "</td><td>" + reminders[i][1] + "</td><td>" + reminders[i][2] + "</td><td><button onclick='edit(" + i + ")'>Edit</button><button onclick='del(" + i + ")'>Delete</button></td></tr>";
        }
    }
}

function del(x){
    reminders.splice(x,1);
    update();
}

function edit(x){
}

var reminders = [];
update();