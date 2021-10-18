import {
  getRecipesApi,
  getSelectedRecipeApi,
  saveRecipeScoreApi,
} from "../api/index";

export const getRecipes = () => (dispatch) => {
  dispatch({ type: "GET_RECIPES_START" });
  getRecipesApi()
    .then((res) => {
      dispatch({ type: "GET_RECIPES_SUCCESS", payload: res || [] });
    })
    .catch(() =>
      dispatch({
        type: "GET_RECIPES_REJECT",
      })
    );
};

export const getSelectedRecipe = (id) => (dispatch) => {
  dispatch({ type: "SELECT_RECIPE_START" });

  getSelectedRecipeApi(id)
    .then((res) => {
      dispatch({ type: "SELECT_RECIPE_SUCCESS", payload: res });
    })
    .catch(() =>
      dispatch({
        type: "SELECT_RECIPE_REJECT",
      })
    );
};

export const saveRecipeScore = (recipe) => (dispatch) => {
  saveRecipeScoreApi(recipe)
    .then(() => {
      dispatch(getRecipes());
    })
    .catch(() =>
      dispatch({
        type: "SELECT_RECIPE_REJECT",
      })
    );
};

export const updateCriteria = (criteria) => (dispatch) => {
  dispatch({ type: "UPDATE_CRITERIA", payload: criteria });
};

export const filterRecipes = () => (dispatch) => {
  dispatch({ type: "FILTER_RECIPES" });
};
