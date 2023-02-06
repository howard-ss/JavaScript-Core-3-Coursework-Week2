const container = document.querySelector("#container");

fetch("https://xkcd.now.sh/?comic=latest")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    const img = document.createElement("img");
    img.src = data.img;
    container.appendChild(img);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
    alert(
      "An error occurred while fetching the comic. Please try again later."
    );
  });
