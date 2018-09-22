
var users = ["hassan","guest"];
var passes = ["Hassan123","Guest123"];

function login(a,b){
    for(var i=0; i<users.length;i++){
        if((a.toLowerCase()==users[i])&&(b==passes[i])){
            document.getElementById("login").style = "display:none;";
            document.getElementById("internal").style = "display:block;";
        }
        else{
            document.getElementById("notValid").style = "display:block;";
        }
    }
}

function logOut(){
    document.getElementById("internal").style = "display:none;";
    document.getElementById("login").style = "display:block;";
    document.getElementById("notValid").style = "display:none;";
}

var reminders=[];

if (reminders.length == 0){
    document.getElementById("reminder").innerHTML += "You have no reminder";
}