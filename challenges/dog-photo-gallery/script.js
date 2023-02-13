const fetchButton = document.querySelector("#fetch-dog-btn");
const clearButton = document.querySelector("#clear-list-btn");
const list = document.querySelector("#dog-list");

fetchButton.addEventListener("click", function () {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => {
      const dogImage = data.message;
      const listItem = document.createElement("li");
      const dogImg = document.createElement("img");
      dogImg.src = dogImage;
      listItem.appendChild(dogImg);
      list.appendChild(listItem);
    })
    .catch((error) => {
      console.error("An error occurred:", error);
      alert(
        "An error occurred while fetching the dog image. Please try again later."
      );
    });
});

clearButton.addEventListener("click", function () {
  list.innerHTML = "";
});


/**
 * CYF solution:
 * function getDogURL() {
  const apiURL = 'https://dog.ceo/api/breeds/image/random';
  return fetch(apiURL)
    .then((response) => response.json())
    .then((jsonResponse) => {
      if (jsonResponse.code === 404) return Promise.reject('No dog found!');
      else return jsonResponse.message;
    });
}

function addDogToList(dogURL) {
  const list = document.querySelector('ul');
  const listElement = document.createElement('li');
  const image = document.createElement('img');
  image.src = dogURL;
  listElement.appendChild(image);
  list.appendChild(listElement);
}

const button = document.querySelector('button');

button.addEventListener('click', (e) => {
  getDogURL()
    .then((dogURL) => addDogToList(dogURL))
    .catch((err) => {
      const dog404Placeholder = './dog-placeholder.jpg';
      addDogToList(dog404Placeholder);
    });
});
 * 
 */


