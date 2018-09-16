
/* CreatePost modal */

/*
variables to Get
    the create post modal,
    button-click events from home page,
    close buttons,
    submit buttons,
    
*/

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
//closing creste post modal when create is clicked in modal
processCreatePost.onclick = function() {
    createPostModal.style.display = "none";
}


/* Redirecting to bloglist.html when all posts button is clicked*/

var allPostBtn = document.getElementById('allPostsBtn');

allPostBtn.onclick = function() {
    window.open('./html/bloglist.html','_self');
}


