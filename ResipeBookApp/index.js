const API_KEY = "275d58779ccf4e22af03e792e8819fff";
const recipeListE1 = document.getElementById("resipe-list");

function displayRecipes(recipes) {
    recipeListE1.innerHTML = "";
    recipes.forEach((recipe) => {
      const recipeItemEl = document.createElement("li");
      recipeItemEl.classList.add("recipe-item");
     const recipeImageEl = document.createElement("img");
     recipeImageEl.src = recipe.image;
     recipeImageEl.alt = recipe.image;

     const tittle = document.createElement("h2");
     tittle.innerHTML = recipe.tittle;

     const  recipeIngredientsEl = document.createElement("p");
     recipeIngredientsEl.innerHTML = `<strong>Ingedients:</strong> ${recipe.
        extendedIngredients
        .map((ingredient) => ingredient.orignial).join("")}`;

        const resipeLink = document.createElement("a");
        resipeLink.href = recipe.sourceUrl;
        resipeLink.innerHTML = "View Resipe"

        recipeListE1.appendChild(recipeImageEl);
        recipeListE1.appendChild(tittle);
        recipeListE1.appendChild(recipeIngredientsEl);
        recipeListE1.appendChild(resipeLink)
        recipeListE1.appendChild(recipeItemEl); 

    });
  }

 async function getResipe(){
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`)
    const data =  await response.json()
    console.log(data);
    return data.resipes;
}

async function init(){
    const resipes =  await getResipe();
    displayResipes(resipes)
}
init();

