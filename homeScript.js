

function checkKey() {
    accountKey = localStorage.getItem("account");
    users = JSON.parse(localStorage.getItem("users"));
    if ((!accountKey) || (!users[accountKey])) {
        window.location.assign("401.html");
    }
}
checkKey();

document.getElementById("motto").innerHTML = users[accountKey][0];

var remindUser = [];

function createRemindArray() {
    for (var i = 0; i < users.length; i++) {
        remindUser[i] = [];
    }
}

createRemindArray();

function updateTable() {
    if (remindUser[accountKey].length > 0) {
        document.getElementById("remindTable").getElementsByTagName("tbody")[0].innerHTML = "";
        document.getElementById("noRemind").style.display = "none";
        for (var i = 0; i < remindUser[accountKey].length; i += 3) {
            document.getElementById("remindTable").getElementsByTagName("tbody")[0].innerHTML += "<tr id='row" + i + "'><td>" + remindUser[accountKey][i] + "</td><td>" + remindUser[accountKey][i + 1] + "</td><td>" + remindUser[accountKey][i + 2] + "</td><td><button onclick='edit(" + i + ")'>Edit</button><button onclick='del(" + i + ")'>Delete</button></td></tr>";
        }
        document.getElementById("remindTable").style.display = "block";
    }
    else {
        document.getElementById("remindTable").style.display = "none";
        document.getElementById("noRemind").style.display = "block";
    }
}

updateTable();

function addNew() {
    remindUser[accountKey].push("", "", "");
    updateTable();
    edit(remindUser[accountKey].length - 3);
}

function edit(a) {
    document.getElementById("row" + a).innerHTML = "<tr id='row" + a + "'><td><input id='remind" + a + "' type='text' value='" + remindUser[accountKey][a] + "'></td><td><input id='time" + a + "' type='time' value='" + remindUser[accountKey][a + 1] + "'></td><td><input id='msg" + a + "' type='text' value='" + remindUser[accountKey][a + 2] + "'></td><td><button onclick='updateRow(" + a + ")'>Update</button><button onclick='del(" + a + ")'>Delete</button></td></tr>";
}

function updateRow(a) {
    var x = document.getElementById("remind" + a).value;
    var y = document.getElementById("time" + a).value;
    var z = document.getElementById("msg" + a).value;
    remindUser[accountKey].splice(a, 3, x, y, z);
    updateTable();
}

function del(a) {
    remindUser[accountKey].splice(a, 3);
    updateTable();
}

function logout() {
    localStorage.removeItem("account");
    window.location.assign("index.html");
}

