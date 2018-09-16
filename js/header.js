/*SIGN-UP Modal */

/*
variables to Get
    the Sign-Up modal,
    button-click events from home page,
    redirection from sign in page,
    submit buttons,
    close buttons
*/

var signUpModal = document.getElementById('signUpModal');
var signUpBtn = document.getElementById("signUpBtn");
var redirectedSignUp = document.getElementById("redirectToSignUp");
var processSignUp = document.getElementsByClassName("signUp-submit");
var closeSignUp = document.getElementById("signUpClose");

// open the modal, on clicking the signup button in home page. 
signUpBtn.onclick = function() {
    signUpModal.style.display = "block";
}
// open signup modal when redirected from signin modal
redirectedSignUp.onclick = function() {
    signInmodal.style.display = "none";
    signUpModal.style.display = "block";
}

// close the modal, on click on span (X)
closeSignUp.onclick = function() {
    signUpModal.style.display = "none";
}


//closing modal when user submits in signup button in modal
processSignUp.onclick = function() {
    signUpModal.style.display = "none";
}





/*Sign In modal */

/*
variables to Get
    the Sign-in modal,
    button-click events from home page,
    submit button,
    close button
*/
var signInmodal = document.getElementById('signInModal');
var signInbtn = document.getElementById("signInBtn");
var processSignIn = document.getElementsByClassName("signin-submit");
var closeSignIn = document.getElementById("signInClose");

// opening the modal when signin button in homepage is clicked
signInbtn.onclick = function() {
    signInmodal.style.display = "block";
}

// closing the modal on click on span (X)
closeSignIn.onclick = function() {
    signInmodal.style.display = "none";
}

//closing modal when user submits in signin button in modal
processSignIn.onclick = function() {
    signInmodal.style.display = "none";
}



/*closing modals if cliked outside the modal-window */
window.onclick = function(event) {
    if (event.target == signUpModal) {
        signUpModal.style.display = "none";
    }
    if (event.target == signInmodal) {
        signInmodal.style.display = "none";
    }
}