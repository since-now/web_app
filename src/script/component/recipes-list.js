import './recipes-item.js';

class RecipesList extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set recipes(recipes) {
        this._recipes = recipes;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = "";
        this._recipes.forEach(recipe => {
            const recipesItemElement = document.createElement("recipes-item");
            recipesItemElement.recipe = recipe;
            this.shadowDOM.appendChild(recipesItemElement);
        });
    }

    renderError(message) {
        this.shadowDOM.innerHTML = `
        <style>
        .placeholder {
            font-weight: lighter;
            color: rgba(0, 0, 0, 0.5);
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
        </style>`;
        this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }

}

customElements.define("recipes-list", RecipesList);