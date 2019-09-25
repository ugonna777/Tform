function validateSubmit() {

    var uname = document.getElementById('username');
    var password = document.getElementById('password');
 
if(uname.value === ""){
    alert('user name is required');
    return false;

} else if(password.value === "") {
    alert("Password is required");
    return false;
}

else if(password.value.length < 6) {
    alert("password requires at least 6 letters or numbers");
    return false;
}

else {
    alert("Welcome")
    return true;
}
 }
