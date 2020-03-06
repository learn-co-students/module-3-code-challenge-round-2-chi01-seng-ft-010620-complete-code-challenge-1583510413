let imageId = 4744; //Enter the id from the fetched image here

const imageURL = `https://randopic.herokuapp.com/images/${imageId}`;

const likeURL = `https://randopic.herokuapp.com/likes/`;

const commentsURL = `https://randopic.herokuapp.com/comments/`;

function fetchData() {
  fetch(imageURL)
    .then(resp => resp.json())
    .then(data => {
      renderObject(data),
    })
    // .then(data => console.log(data));
}

// const object = {
//   id: 4744,
//   url:
//     "http://blog.flatironschool.com/wp-content/uploads/2015/10/laptop-352x200.jpg",
//   name: "Turing Tables",
//   like_count: 0,
//   comments: [
//     {
//       id: 86217,
//       content: "first comment!",
//       image_id: 4744,
//       created_at: "2020-03-06T16:07:08.130Z",
//       updated_at: "2020-03-06T16:07:08.130Z"
//     }
//   ]
// };

function renderObject(data) {
  const image = document.getElementById("image");
  image.innerHTML = data.url;
  const name = document.getElementById("name");
  name.innerHTML = data.name;
  const likes = document.getElementById("likes");
  likes.innerHTML = data.likes;
  const comments = document.getElementById("comments");
  comments.innerHTML = data.comments;
}

fetchData();
renderObject();
