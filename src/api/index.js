// import axios from "axios";
import { recipeSummary } from "../data/sampleData";
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
