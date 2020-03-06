let imageId = 4742
const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
const likeURL = `https://randopic.herokuapp.com/likes/`
const commentsURL = `https://randopic.herokuapp.com/comments/`

fetchImage()
likeEventListener()
commentEventListener()
deleteEventListener()

//functions
function fetchImage() {
  fetch(imageURL)
  .then(resp => resp.json())
  .then(imageData => renderImage(imageData))
}


function renderImage(imageData) {
  const titleHeader = document.getElementById('name')
  const imageSpot = document.getElementById('image')
  const likesSpot = document.getElementById('likes')
  
  titleHeader.innerHTML = imageData.name
  imageSpot.src = imageData.url
  likesSpot.innerHTML = imageData.like_count
  imageData.comments.forEach(comment => renderComment(comment))
}


function renderComment(comment){
  const commentsSpot = document.getElementById('comments')
  const commentLi = `<li id=${comment.id}>${comment.content}
    <button id="delete" class="delete">Delete Comment</button>
  </li>`
  commentsSpot.innerHTML += commentLi
}


function addLikeFrontend() {
  let likeCount = document.getElementById('likes')
  let likeNum = parseInt(likeCount.innerHTML)
  likeNum += 1
  likeCount.innerHTML = `${likeNum}`
  addLikeBackend()
}

function addLikeBackend() {
  const reqObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      image_id: imageId
    })
  }
  fetch(likeURL, reqObj)
}




function addCommentBackend(e) {
  newComment = e.target[0].value
  
  const reqObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      image_id: imageId,
      content: newComment
    })
  }
  fetch(commentsURL, reqObj)
  .then(resp => resp.json())
  .then(commentData => renderComment(commentData))
}

//not quite working yet
// function deleteComment(e) {
//   const commentId = e.target.parentElement.id
//   const reqObj = {
//     method: 'DELETE',
//   }
//   fetch(`https://randopic.herokuapp.com/comments/:${commentId}`, reqObj)
//   .then(resp => console.log(resp))
//   removeComment(e)
// }

// function removeComment(e){

// }




//event listeners
function likeEventListener() {
  const likeBtn = document.getElementById('like_button')
  likeBtn.addEventListener('click', function(e) {
    addLikeFrontend()
  });
}


function commentEventListener() {
  const form = document.getElementById('comment_form')
  form.addEventListener('submit', function(e) {
    e.preventDefault()
    addCommentBackend(e)
    form.reset()
  })
}


function deleteEventListener() {
  const commentsSpot = document.getElementById('comments')
  commentsSpot.addEventListener('click', function(e) {
    if(e.target.innerHTML == 'Delete Comment') {
      deleteComment(e)
    }
  })
}


//switched to pessimistic rendering as a first step in the delete process.

// function addCommentFrontend(e) {
//   const commentsSpot = document.getElementById('comments')
//   newComment = e.target[0].value
//   newCommentLi = `<li>${newComment}</li>`
//   commentsSpot.innerHTML += newCommentLi
//   addCommentBackend(newComment)
// }