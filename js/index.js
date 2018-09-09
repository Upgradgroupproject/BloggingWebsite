// Get the Sign-Up modal
var modal = document.getElementById('SignUpModal');

// Get the button that opens the modal
var btn = document.getElementById("signUpBtn");

var processSignUp = document.getElementsByClassName("signUp-button");

// Get the <span> element that closes the modal
var span = document.getElementById("signUpClose");

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

processSignUp.onclick = function() {
    modal.style.display = "none";
}





//////////// for sign in 


// Get the Login modal
var signInmodal = document.getElementById('SignInModal');

// Get the button that opens the modal
var SignInbtn = document.getElementById("signInBtn");

var processSignIn = document.getElementsByClassName("signin-button");


var signInspan = document.getElementById("signInClose");

// When the user clicks on the button, open the modal 
SignInbtn.onclick = function() {
    signInmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
signInspan.onclick = function() {
    signInmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == signInmodal) {
        signInmodal.style.display = "none";
    }
}

processSignIn.onclick = function() {
    signInmodal.style.display = "none";
}