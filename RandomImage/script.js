const imageContainerEl = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () => {
 // const imageNum = 10; // Declare imageNum with const or let
  addNewImages(); // Pass imageNum as an argument to addNewImages
});

function addNewImages() { // Accept imageNum as a parameter
 // for (let index = 0; index < imageNum; index++) {
    const newImgEl = document.createElement("img");
    newImgEl.src = `https://picsum.photos/300?random=${Math.floor(
      Math.random() * 2000
    )}`;
    imageContainerEl.appendChild(newImgEl);
  }
//}
