import axios from "axios";
import { apiServer } from "./url";
import { recipeList } from "../data/sampleData";

// const serverAddress = "/recipes";

export async function getRecipesApi() {
  try {
    const response = await axios.get(`http://localhost:8080/recipes`);
    return response.data;
  } catch (e) {
    console.log("error in getRecipesApi");
    return null;
  }
}

export async function getSelectedRecipeApi(id) {
  try {
    const response = await axios.get(`http://localhost:8080/recipes/${id}`);
    return response.data;
  } catch (e) {
    console.log("error in getSelectedRecipeApi");
    return null;
  }
}

export async function saveRecipeScoreApi(id, score) {
  try {
    const response = await axios.get(`http://localhost:8080/recipes/${id}`);
    return response.data.scores[0];
    // console.log(id, score);
    // return 1;
  } catch (e) {
    console.log("error in saveRecipeScoreApi");
    return null;
  }
}
