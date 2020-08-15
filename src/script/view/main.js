import '../component/recipes-list.js';
import '../component/search-tool.js';
import RecipesSource from '../data/recipes-source.js';

const main = () => {
    const searchElement = document.querySelector("search-tool");
    const recipesListElement = document.querySelector("recipes-list");

    const onButtonSearchClicked = async () => {
        try{
            const result = await RecipesSource.searchRecipe(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };

    const renderResult =  results => {
        recipesListElement.recipes = results;
    };

    const fallbackResult = message => {
        recipesListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;