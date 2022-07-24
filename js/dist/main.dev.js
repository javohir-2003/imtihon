"use strict";

var elList = document.querySelector(".js-list");
var elListPosts = document.querySelector(".js-list-posts");
var elListComment = document.querySelector(".js-list-comment");
var elItem = document.querySelector(".js-item");
var elItemPosts = document.querySelector(".js-post-item");
var elItemComment = document.querySelector(".js-comment-item");
var elTemplate = document.querySelector(".js-template").content;
var elPosts = document.querySelector(".js-posts").content;
var elTemplateComment = document.querySelector(".js-comments").content;

var renderUsers = function renderUsers(array, node) {
  array.forEach(function (el) {
    var newTemplate = elTemplate.cloneNode(true);
    newTemplate.querySelector(".js-item").dataset.id = el.id;
    newTemplate.querySelector(".js-id").textContent = el.id;
    newTemplate.querySelector(".js-name").textContent = el.name;
    newTemplate.querySelector(".js-username").textContent = el.username;
    newTemplate.querySelector(".js-email").href = "mailto:" + el.email;
    newTemplate.querySelector(".js-email").textContent = el.email;
    newTemplate.querySelector(".js-street").textContent = el.address.street;
    newTemplate.querySelector(".js-suite").textContent = el.address.suite;
    newTemplate.querySelector(".js-city").textContent = el.address.city;
    newTemplate.querySelector(".js-zipcode").textContent = el.address.zipcode;
    newTemplate.querySelector(".js-geo").textContent = " adress geo";
    newTemplate.querySelector(".js-geo").href = "https:www.google.com/maps/place/".concat(el.address.geo.lat, ",").concat(el.address.geo.lng);
    newTemplate.querySelector(".js-phone").href = "tel:" + el.phone;
    newTemplate.querySelector(".js-phone").textContent = el.phone;
    newTemplate.querySelector(".js-website").href = "mailto:" + el.website;
    newTemplate.querySelector(".js-website").textContent = el.website;
    newTemplate.querySelector(".company-name").textContent = el.company.name;
    newTemplate.querySelector(".company-catchphrase").textContent = el.company.catchPhrase;
    newTemplate.querySelector(".company-bs").textContent = el.company.bs;
    node.appendChild(newTemplate);
  });
};

function getUsers() {
  var response, data;
  return regeneratorRuntime.async(function getUsers$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch('https://jsonplaceholder.typicode.com/users'));

        case 3:
          response = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(response.json());

        case 6:
          data = _context.sent;
          renderUsers(data, elList);
          _context.next = 13;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 10]]);
}

getUsers();
elList.addEventListener("click", function (evt) {
  if (evt.target.matches(".js-item")) {
    var getPosts = function getPosts() {
      var response, data;
      return regeneratorRuntime.async(function getPosts$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return regeneratorRuntime.awrap(fetch('https://jsonplaceholder.typicode.com/posts'));

            case 3:
              response = _context2.sent;
              _context2.next = 6;
              return regeneratorRuntime.awrap(response.json());

            case 6:
              data = _context2.sent;
              renderposts(data, elListPosts);
              _context2.next = 13;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[0, 10]]);
    };

    var listdataset = evt.target.dataset.id;
    elListPosts.innerHTML = " ";
    elListComment.innerHTML = " ";

    var renderposts = function renderposts(array, node) {
      array.forEach(function (el) {
        if (el.userId == listdataset) {
          var newPost = elPosts.cloneNode(true);
          newPost.querySelector(".js-post-item").dataset.id = el.id;
          newPost.querySelector(".js-id-post").textContent = el.id;
          newPost.querySelector(".js-title-post").textContent = el.title;
          newPost.querySelector(".js-text-post").textContent = el.body;
          node.appendChild(newPost);
        }
      });
    };

    getPosts();
  }
});
elListPosts.addEventListener("click", function (evt) {
  if (evt.target.matches(".js-post-item")) {
    var getComment = function getComment() {
      var response, data;
      return regeneratorRuntime.async(function getComment$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return regeneratorRuntime.awrap(fetch('https://jsonplaceholder.typicode.com/comments'));

            case 3:
              response = _context3.sent;
              _context3.next = 6;
              return regeneratorRuntime.awrap(response.json());

            case 6:
              data = _context3.sent;
              rendercomments(data, elListComment);
              _context3.next = 13;
              break;

            case 10:
              _context3.prev = 10;
              _context3.t0 = _context3["catch"](0);
              console.log(_context3.t0);

            case 13:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, [[0, 10]]);
    };

    var listposts = evt.target.dataset.id;
    elListComment.innerHTML = " ";

    var rendercomments = function rendercomments(array, node) {
      array.forEach(function (el) {
        if (el.postId == listposts) {
          var newComment = elTemplateComment.cloneNode(true);
          newComment.querySelector(".js-id-comment").textContent = el.id;
          newComment.querySelector(".js-title-comment").textContent = el.name;
          newComment.querySelector(".js-link-comment").textContent = el.email;
          newComment.querySelector(".js-text-comment").textContent = el.body;
          node.appendChild(newComment);
        }
      });
    };

    getComment();
  }
});