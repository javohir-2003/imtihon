const elList = document.querySelector(".js-list");
const elListPosts = document.querySelector(".js-list-posts");
const elListComment = document.querySelector(".js-list-comment");
const elItem = document.querySelector(".js-item");
const elItemPosts = document.querySelector(".js-post-item");
const elItemComment = document.querySelector(".js-comment-item");
const elTemplate = document.querySelector(".js-template").content;
const elPosts = document.querySelector(".js-posts").content;
const elTemplateComment = document.querySelector(".js-comments").content;




const renderUsers = (array, node) => {
  array.forEach(el  => {
    const newTemplate = elTemplate.cloneNode(true);
   
    newTemplate.querySelector(".js-item").dataset.id=el.id;
    newTemplate.querySelector(".js-id").textContent=el.id;
    newTemplate.querySelector(".js-name").textContent = el.name;
    newTemplate.querySelector(".js-username").textContent = el.username;
    newTemplate.querySelector(".js-email").href = "mailto:" + el.email;
    newTemplate.querySelector(".js-email").textContent = el.email;
    newTemplate.querySelector(".js-street").textContent = el.address.street;
    newTemplate.querySelector(".js-suite").textContent = el.address.suite;
    newTemplate.querySelector(".js-city").textContent = el.address.city;
    newTemplate.querySelector(".js-zipcode").textContent = el.address.zipcode;
    newTemplate.querySelector(".js-geo").textContent = " adress geo";

    newTemplate.querySelector(".js-geo").href = `https:www.google.com/maps/place/${el.address.geo.lat},${el.address.geo.lng}`
    newTemplate.querySelector(".js-phone").href = "tel:" + el.phone;
    newTemplate.querySelector(".js-phone").textContent =  el.phone;
    newTemplate.querySelector(".js-website").href = "mailto:" + el.website;
    newTemplate.querySelector(".js-website").textContent =  el.website;
    newTemplate.querySelector(".company-name").textContent =  el.company.name;
    newTemplate.querySelector(".company-catchphrase").textContent =  el.company.catchPhrase;
    newTemplate.querySelector(".company-bs").textContent =  el.company.bs;
    node.appendChild(newTemplate);
  });
}

async function getUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json()
     renderUsers(data, elList);
  } catch (error) {
    console.log(error);
  }
}
getUsers()













elList.addEventListener("click", function (evt) {
  if(evt.target.matches(".js-item")){
    let listdataset = evt.target.dataset.id
    elListPosts.innerHTML = " "
    elListComment.innerHTML = " "
    const renderposts = (array, node) => {
      array.forEach(el  => {
 if(el.userId== listdataset ){
   const newPost = elPosts.cloneNode(true);
   newPost.querySelector(".js-post-item").dataset.id=el.id;
   newPost.querySelector(".js-id-post").textContent=el.id;
   newPost.querySelector(".js-title-post").textContent=el.title;
   newPost.querySelector(".js-text-post").textContent=el.body;
   node.appendChild(newPost);
 }

      });
    }

    async function getPosts() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json()
         renderposts(data, elListPosts);
      } catch (error) {
        console.log(error);
      }
    }

    getPosts()
  }

})

















elListPosts.addEventListener("click", function (evt) {
  if(evt.target.matches(".js-post-item")){
    let listposts = evt.target.dataset.id
    elListComment.innerHTML = " "
    const rendercomments = (array, node) => {
      array.forEach(el  => {
 if(el.postId == listposts ){
   const newComment = elTemplateComment.cloneNode(true);
   newComment.querySelector(".js-id-comment").textContent=el.id;
   newComment.querySelector(".js-title-comment").textContent=el.name;
   newComment.querySelector(".js-link-comment").textContent=el.email;
   newComment.querySelector(".js-text-comment").textContent=el.body;
   node.appendChild(newComment);
 }

      });
    }

    async function getComment() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        const data = await response.json()
         rendercomments(data, elListComment);
      } catch (error) {
        console.log(error);
      }
    }
 
    getComment()
  }

})