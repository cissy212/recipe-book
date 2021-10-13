// import axios from "axios";
import { recipeSummary, recipeList } from "../data/sampleData";

// const serverAddress = "";

export async function getRecipeSummaryApi() {
  try {
    // const response = await axios.get(`${serverAddress}test.json`, {
    //   headers: { "Content-Type": "application/json" },
    //   timeout: 35000,
    // });
    // return response.data;
    return recipeSummary;
  } catch (e) {
    console.log("error in getRecipeSummaryApi");
    return null;
  }
}

export async function getSelectedRecipeApi(id) {
  try {
    // const response = await axios.get(`${serverAddress}test.json`, {
    //   headers: { "Content-Type": "application/json" },
    //   timeout: 35000,
    // });
    // return response.data;

    return recipeList.find((recipe) => recipe.id === id);
  } catch (e) {
    console.log("error in getSelectedRecipeApi");
    return null;
  }
}

export async function saveRecipeScoreApi(id, score) {
  try {
    // const response = await axios.get(`${serverAddress}test.json`, {
    //   headers: { "Content-Type": "application/json" },
    //   timeout: 35000,
    // });
    // return response.data;
    console.log(id, score);
    return 1;
  } catch (e) {
    console.log("error in saveRecipeScoreApi");
    return null;
  }
}
