import { getRecipeSummaryApi } from "../api/index";

export const getRecipeSummary = () => (dispatch) => {
  dispatch({ type: "GET_RECIPES_START" });
  getRecipeSummaryApi()
    .then((res) => {
      dispatch({ type: "GET_RECIPES_SUCCESS", payload: res || {} });
    })
    .catch(() =>
      dispatch({
        type: "GET_RECIPES_REJECT",
      })
    );
};
