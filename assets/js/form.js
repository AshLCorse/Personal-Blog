const usernameInput = document.querySelector("#username");
const titleInput = document.querySelector("#blog-title");
const postInput = document.querySelector("#blog-post");
const submitBtn = document.querySelector("#submit-btn");
const darkModeBtn = document.querySelector("#dark-mode");

function updateLocalStorage() {
  localStorage.setItem("blogPost", JSON.stringify("blogPost"));
}

function loadFromLocalStorage() {
  let blogPost = JSON.parse(localStorage.getItem("blogPost"));
  if (Array.isArray(blogPost) && blogPost != null) {
    return blogPost;
  } else {
    blogPost = [];
  }
}
