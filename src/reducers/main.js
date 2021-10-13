import { bindActionCreators } from "redux";

const initialState = {
  statusRecipesData: null, // loading, success, error
  statusScoresData: null, // loading, success, error
  statusSelectedRecipeData: null, // loading, success, error
  //TODO:split the status and data sets into different reducers to be combined if this escalates
  recipeName: "",
  recipesData: [],
  scoresData: [],
  selectedRecipeData: {},
};

export default function mainReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_RECIPES_START":
      return { ...state, statusRecipesData: "loading" };
    case "GET_RECIPES_SUCCESS": {
      return {
        ...state,
        statusRecipesData: "success",
        recipesData: action.payload,
      };
    }
    case "GET_RECIPES_REJECT":
      return {
        ...state,
        statusRecipesData: "error",
      };
    case "SELECT_RECIPE_START":
      return { ...state, statusSelectedRecipeData: "loading" };
    case "SELECT_RECIPE_SUCCESS":
      return {
        ...state,
        statusSelectedRecipeData: "success",
        selectedRecipe: action.payload,
      };
    case "SELECT_RECIPE_REJECT":
      return { ...state, statusSelectedRecipeData: "error" };
    case "GET_SCORES_START":
      return { ...state, statusScoresData: "loading" };
    case "GET_SCORES_SUCCESS": {
      return {
        ...state,
        statusScoresData: "success",
        scoresData: action.payload,
      };
    }
    case "GET_SCORES_REJECT":
      return {
        ...state,
        statusScoresData: "error",
      };
    default:
      return state;
  }
}
