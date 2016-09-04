var data = [
    {"name":"Janus","email":"janusudsen@yahoo.com","phone":"1234"},
    {"name":"Yousef","email":"yousefmohsen@gmail.com","phone":"4321"},
    {"name":"Noone","email":"nooneatall@nomail.no","phone":"0000"}
];

//for (var i=0; i < data.length; i++){
//    console.log(data[i]);
//}
var tableBody = document.getElementById("personTable");
var populateTable = function(){
    tableBody.innerHTLM = "";
    for (var i=0; i < data.length; i++){
        var row = tableBody.insertRow(i);
        row.insertCell(0).innerHTML = data[i].name;
        row.insertCell(1).innerHTML = data[i].email;
        row.insertCell(2).innerHTML = data[i].phone;
    }
};
populateTable();

var cell = row.insertCell(3);
var btn = document.createElement("button");
btn.innerHTML = "Delete";
cell.appendChild(btn);

btn.onclick = (function(){
    var inc = i;
    return function(){
        data.splice(inc, 1);
        populateTable();
    };
})();

var personForm = document.getElementById("personForm");
personForm.onsubmit = function(event){
    event.preventDefault();
    var data ={};
    data.name = personForm.elements["name"].value;
    data.email = personForm.elements["email"].value;
    data.phone = personForm.elements["phone"].value;
    data.push(data);
    populateTable();
};
