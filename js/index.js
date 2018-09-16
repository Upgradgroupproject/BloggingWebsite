// Get the Sign-Up modal
var signUpModal = document.getElementById('signUpModal');

// Get the button that opens the modal
var signUpBtn = document.getElementById("signUpBtn");

var redirectedSignUp = document.getElementById("redirectToSignUp");

var processSignUp = document.getElementsByClassName("signUp-submit");

// Get the <span> element that closes the modal
var closeSignUp = document.getElementById("signUpClose");

// When the user clicks on the button, open the modal 
signUpBtn.onclick = function() {
    signUpModal.style.display = "block";
}

redirectedSignUp.onclick = function() {
    signInmodal.style.display = "none";
    signUpModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeSignUp.onclick = function() {
    signUpModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == signUpModal) {
        signUpModal.style.display = "none";
    }
}

processSignUp.onclick = function() {
    signUpModal.style.display = "none";
}





//////////// for sign in 


// Get the Login modal
var signInmodal = document.getElementById('signInModal');

// Get the button that opens the modal
var signInbtn = document.getElementById("signInBtn");

var processSignIn = document.getElementsByClassName("signin-submit");


var closeSignIn = document.getElementById("signInClose");

// When the user clicks on the button, open the modal 
signInbtn.onclick = function() {
    signInmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeSignIn.onclick = function() {
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


//////////// for CreatePost

var createPostModal = document.getElementById('createPostModal');

var createPostBtn = document.getElementById('createPostbtn');

var closeCreatePost = document.getElementById("createClose");

var processCreatePost = document.getElementsByClassName("CreatePost-submit");



// When the user clicks on the button, open the modal 
createPostBtn.onclick = function() {
    createPostModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeCreatePost.onclick = function() {
    createPostModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == createPostModal) {
        createPostModal.style.display = "none";
    }
}

processCreatePost.onclick = function() {
    createPostModal.style.display = "none";
}

var allPostBtn = document.getElementById('allPostsBtn');

allPostBtn.onclick = function() {
    window.open('./html/bloglist.html','_self');
}


