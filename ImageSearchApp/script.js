const accessKey = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";

const form = document.querySelector('form');
const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-input");
const searchResults = document.querySelector('.search-results');

const showMore = document.querySelector("#show-more-button");

let inputData = "";
let page = 1;
async function searchImages() {
    inputData = searchInput.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
  
    const response = await fetch(url);
    const data = await response.json();
   console.log(data);
}

searchImages();