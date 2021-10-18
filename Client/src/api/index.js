import axios from "axios";

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

export async function saveRecipeScoreApi(recipe) {
  try {
    await axios({
      method: "put",
      url: `http://localhost:8080/recipes/${recipe._id}`,
      data: recipe,

      headers: { "Content-Type": "application/json" },
      timeout: 35000,
    });
  } catch (e) {
    console.log("error in saveRecipeScoreApi");
  }

  // await axios.put(
  //   `http://localhost:8080/recipes/${id}`,
  //   {
  //     headers: { "Content-Type": "application/json" },
  //     timeout: 35000,
  //   },
  //   { scores: scores }
  // );
  // const newScores = response.data.scores;
  // const addScore = newScores.push(score);
  // const average = (newScores) => {
  //   const total = newScores.reduce((acc, c) => acc + c, 0);
  //   return total / newScores.length;
  // };
  // return average(newScores);
  // } catch (e) {
  //   console.log("error in saveRecipeScoreApi");
  //   return null;
  //
}
