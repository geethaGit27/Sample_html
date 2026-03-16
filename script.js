function validateForm() {

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let event = document.getElementById("event").value;

if(name == "" || email == "" || event == "") {
alert("Please fill all fields");
return false;
}

alert("Registration Successful!");
return true;

}