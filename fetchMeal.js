    // membuat function untuk fetch data dari API dengan await dan async
    async function fetchRecipes() {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        const data = await response.json();
        return data.meals;
    }

    async function displayRecipes() {
        const recipes = await fetchRecipes();
        const recipeList = document.getElementById('recipe-list');
        recipeList.innerHTML = '';

        recipes.forEach(recipe => {
            const card = document.createElement('div');
            card.className = 'card m-2';
            card.style.width = '18rem';

            card.innerHTML = `
                <img src="${recipe.strMealThumb}" class="card-img-top" alt="${recipe.strMeal}">
                <div class="card-body">
                    <h5 class="card-title">${recipe.strMeal}</h5>
                    <a href="${recipe.strYoutube}" target="_blank" class="btn btn-primary">Watch Recipe</a>
                </div>
            `;

            recipeList.appendChild(card);
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        displayRecipes();
    });