// document.addEventListener('DOMContentLoaded', () => {
//   console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

//   let imageId = 1 //Enter the id from the fetched image here

//   const imageURL = `https://randopic.herokuapp.com/images/4745`

//   const likeURL = `https://randopic.herokuapp.com/likes/`

//   const commentsURL = `https://randopic.herokuapp.com/comments/`

// })


let imgName = document.getElementById("name")
let likes = document.getElementById("likes")
let imgDiv = document.getElementById("image")
let commentsSection = document.getElementById("comments")
const likeButton = document.getElementById("like_button")
let commentBox = document.querySelectorAll("input")[0]
const submitButton = document.querySelectorAll("input")[1]
const form = document.querySelector("form")
// need to prevent default on submitButton


function fetchImage(){
  fetch("https://randopic.herokuapp.com/images/4745")
  .then( resp => resp.json() )
  .then( imageInfo => showImageInfo(imageInfo))
}

function showImageInfo(imageInfo){
  imgName.innerText = imageInfo.name
  likes.innerText = imageInfo.like_count
  imgDiv.src = imageInfo.url
  commentsSection.innerText = imageInfo.comments[0].content
  // go back to fix to put comments into <li>, which would be contained in the <ul>
}

function handleLikeButton(){
  //make a fetch post
  // get likes
  // add 1 to increment the likes
  //make sure the postObj is placed HERE! BEFORE the fecth
  
  const postObj = {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify( { 
      like_count: parseInt(likes.innerText) + 1,
      image_id: 4745
    } ) 
    
  }

  fetch("https://randopic.herokuapp.com/likes/", postObj)
  .then( resp => resp.json() )
  .then( updatedLike => console.log(updatedLike))
  // need to show updated like
  //updatedLike object does not have the right info needed to show likes

  likes.innerText = parseInt(likes.innerText) + 1
}

function handleSubmitButton(){

  event.preventDefault();
  commentBox.innerText = commentBox.value
  console.log("submit button clicked")
}



fetchImage()
likeButton.addEventListener("click", handleLikeButton)
form.addEventListener("submit", handleSubmitButton)



