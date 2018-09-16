//Start code


/* 
   Function editBlog()  
    - checks editblogbutton's node and its classname
      if edit -> changes to save
      else    -> changes to edit
    - next call makes it read-only again
*/

function editBlog() {


        if(document.getElementsByClassName('editBlog-button')[0].childNodes[1].className === "fa fa-edit"){
            document.getElementById("blogBody").contentEditable = true;
            document.getElementById("blogTitleNew").contentEditable = true;
            document.getElementsByClassName('editBlog-button')[0].innerHTML="Save"+'<i class="fa fa-save"></i>';
        }
        else{
            document.getElementById("blogBody").contentEditable = false;
            document.getElementById("blogTitleNew").contentEditable = false;
            document.getElementsByClassName('editBlog-button')[0].innerHTML="Edit"+'<i class="fa fa-edit"></i>';
        }

}




/* 

  likeCount and Function likeBlog()
    - var likeCount is global to save no. of like-clicks
    - the function is called like button click 
    - count is incremented and added to text to display no. of likes

*/


var likeCount = 0;
function likeBlog() {

    likeCount++;
    if(likeCount === 1){
        var likeUpdates = likeCount + ' person likes this!';
    }
    else if(likeCount > 1){
        var likeUpdates = likeCount + ' people have liked this!';
    }
    else{
        return;
    }
    document.getElementById('likeCounter').innerHTML=likeUpdates;
    document.getElementsByClassName('likePost-button')[0].innerHTML='<i class="fa fa-thumbs-up"></i>'+"Liked!";
}



   
/*
Function displayAllComments() 
step 1 - create header of comment list 'All commments'
         add above header in comments section
         get div to display comments
          
step 2 - create paragraph 'p' for user comment
         add styles to paragraph   
         create text-node for paragraph with user comments

step 3 - add user comment in paragraph created
         add in commentList [div(display comments)]
          'insertBefore' - comment should be added at the TOP 

*/
function displayAllComments(commentId) {
    
    var commentsListHeader = 'All Comments';
    document.getElementsByClassName('comments')[0].innerHTML=commentsListHeader;
    var commentsList = document.getElementsByClassName('comments-display')[0];

    var userComment = document.createElement('p'); 
    userComment.className ="comments-frame";            
    var commentText = document.createTextNode(commentId.value); 

    userComment.appendChild(commentText);
    commentsList.insertBefore(userComment,commentsList.childNodes[0]) ;
}