// the previous labs and code challange have a different format from this challange.


//variables
  // console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')
  let imageId = 4740 //Enter the id from the fetched image here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`
  const myUrl = 'https://randopic.herokuapp.com/images/4740'
  const likeBtn = document.querySelector('#like_button')
  const commentForm= document.querySelector('#comment_form')
  const imageCard = document.querySelector('#image_card')
  const submitForm = document.querySelector('#submitBtn')
  
//functions
const fetchData = () =>{
  fetch(myUrl)
  .then(resp => resp.json())
  .then(data => renderData(data))
}

const renderData = (data) => {
  //I was unable to render the comments initally, i was going to refactor once i completed the deliverables
      imageCard.innerHTML =`<div id="image_card" class="card col-md-4">
          <img data-id="${data.id}" src="${data.url}" id="image" data-id=""/>
          <h4 id="name">${data.name}</h4>
          <span>Likes:
            <span  id="likes">${data.like_count}</span></span>
          </span>
          <button data-id="${data.id}" id="like_button">Like</button>
          <form id="comment_form">
            <input id="comment_input" type="text" name="comment" placeholder="Add Comment"/>
            <input id="submitBtn" type="submit" value="Submit"/>
          </form>
          <ul id="comments">
               ${data.comments}
          </ul>
          </div>`
}

const likeClicked = () => {
  event.preventDefault()  
  const increaseLikes = parseInt(event.target.previousElementSibling.innerText) + 1
  debugger
  const btnId = event.target.dataset.id
  const reqObj = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      "like_count": increaseLikes,
      "image_id": imageId})
  }

  if(event.target.tagName === 'BUTTON'){
    fetch(likeURL, reqObj)
    .then( resp => resp.json())
    .then( likes => console.log(likes))
    .catch( err => console.log(err))
  } 
}



// adding a comment feature
// I know I need to create an event listener on submit button, prevent the default action
// scrape the data from the form
// render the new data into an LI in the ul comments
//
//create a post request
// pass in an object in the body {image_id:, content:}

// const postComments = () => {
  //prevent the default
  // scrape the data from the form
  //send a post request
  //render the new post to the page
// }



//event listeners
imageCard.addEventListener('click', likeClicked)
// submitform.addEventListener('submit', postComments)


//invoked functions
fetchData()