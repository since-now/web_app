class RecipesItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    set recipe(recipe) {
        this._recipe = recipe;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        :host {
            display: block;
            margin-bottom: 18px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        }
        .food-recipe {
            width: 100%;
            max-height: 300px;
            object-fit: cover;
            object-position: center;
        }
        .food-info {
            padding: 24px;
        }
        .food-info > h2 {
            font-weight: lighter;
        }
        .food-info > p {
            margin-top: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
           -webkit-line-clamp: 10; /* number of lines to show */
        }
        </style>
        <h1>${this._recipe.strMeal}</h1>
        <img class="food-recipe" src="${this._recipe.strMealThumb}" alt="Image">
        <div class="food-info">
        <h2><strong>Ingredients</strong></h2><br>
        <h3>${this._recipe.strMeasure1} ${this._recipe.strIngredient1}</h3>
        <h3>${this._recipe.strMeasure2} ${this._recipe.strIngredient2}</h3>
        <h3>${this._recipe.strMeasure3} ${this._recipe.strIngredient3}</h3>
        <h3>${this._recipe.strMeasure4} ${this._recipe.strIngredient4}</h3>
        <h3>${this._recipe.strMeasure5} ${this._recipe.strIngredient5}</h3>
        <h3>${this._recipe.strMeasure6} ${this._recipe.strIngredient6}</h3>
        <h3>${this._recipe.strMeasure7} ${this._recipe.strIngredient7}</h3>
        <h3>${this._recipe.strMeasure8} ${this._recipe.strIngredient8}</h3>
        <h3>${this._recipe.strMeasure9} ${this._recipe.strIngredient9}</h3>
        <h3>${this._recipe.strMeasure10} ${this._recipe.strIngredient10}</h3>
        <h3>${this._recipe.strMeasure11} ${this._recipe.strIngredient11}</h3>
        <h3>${this._recipe.strMeasure12} ${this._recipe.strIngredient12}</h3>
        <h3>${this._recipe.strMeasure13} ${this._recipe.strIngredient13}</h3>
        <h3>${this._recipe.strMeasure14} ${this._recipe.strIngredient14}</h3>
        <h3>${this._recipe.strMeasure15} ${this._recipe.strIngredient15}</h3>
        <h3>${this._recipe.strMeasure16} ${this._recipe.strIngredient16}</h3>
        <h3>${this._recipe.strMeasure17} ${this._recipe.strIngredient17}</h3>
        <h3>${this._recipe.strMeasure18} ${this._recipe.strIngredient18}</h3>
        <h3>${this._recipe.strMeasure19} ${this._recipe.strIngredient19}</h3>
        <h3>${this._recipe.strMeasure20} ${this._recipe.strIngredient20}</h3><br>
        <h2><strong>Instruction</strong></h2><br>
        <h3>${this._recipe.strInstructions}</h3>
        </div>`;
    }

}

customElements.define("recipes-item", RecipesItem);