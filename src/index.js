// document.addEventListener('DOMContentLoaded', () => {
//   console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')


// })
const image = document.getElementById('image')
image.src = "http://blog.flatironschool.com/wp-content/uploads/2017/06/5-year-event-352x200.jpg"

const likeBtn = document.getElementById('like_button')

let imageId = "4743"

const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

const likeURL = `https://randopic.herokuapp.com/likes/`

const commentsURL = `https://randopic.herokuapp.com/comments/`

const commentsList = document.getElementById('comments')
//----------vars


//------------fns
const getImage = () => {
  fetch(imageURL)
    .then(resp => resp.json())
    .then(image => renderImage(image))
}

const renderImage = (image) => {
  const imageTitle =  document.getElementById('name')
  imageTitle.innerHTML = image.name
  let numberOfLikes = document.getElementById('likes')
  numberOfLikes.innerHTML = image.like_count
  displayComments(comments) /// this is the last thing I was working on
  }
 
  // const displayComments = (comments) => {
    // const comment = comments.forEach(element => {
    //   console.log(element)
    // });
  //   debugger
  //   const li = document.createElement('li')
  //   li.innerHTML = comment.content
  // // li.innerHTML = 
  //   comments.appendChild(li)
  // }


const addLike = () => {
  likes.innerText = parseInt(likes.innerText) + 1 

const reqObj = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "like_count": 'likes.innerText',
    'image_id': imageId
  })
}

  fetch(likeURL, reqObj)
    .then(resp => resp.json())
    .then(data => console.log(data))
} 

//----------event handlers
const likeClickHandler = () => {
  let likes = parseInt(event.target.previousElementSibling.children[0].innerText) 
  if (event.target.tagName === 'BUTTON') {
    addLike()
  }
}

//------------event listeners
likeBtn.addEventListener('click', likeClickHandler)

//-----------invoked fns
getImage()
