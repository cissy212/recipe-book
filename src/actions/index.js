import {
  getRecipeSummaryApi,
  getSelectedRecipeApi,
  saveRecipeScoreApi,
} from "../api/index";

export const getRecipeSummary = () => (dispatch) => {
  console.log("getRecipeSummary");
  dispatch({ type: "GET_RECIPES_START" });
  getRecipeSummaryApi()
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

export const saveRecipeScore = (id, score) => (dispatch) => {
  saveRecipeScoreApi(id, score)
    //   .then(() => {
    //     dispatch(getRecipeSummary());
    //   })
    .catch(() =>
      dispatch({
        type: "SELECT_RECIPE_REJECT",
      })
    );
};
