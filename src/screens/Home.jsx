import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import RecipesTable from "../components/RecipesTable";
import { Link } from "react-router-dom";
import * as actions from "../actions";
import * as helper from "../helpers";

const Home = () => {
  const dispatch = useDispatch();
  const {
    recipesData,
    statusRecipesData,
    searchCriteria,
    filteredRecipesData,
  } = useSelector((state) => state.mainReducer);

  useEffect(() => {
    fetchData();
  }, []);
  console.log(filteredRecipesData, recipesData, searchCriteria);
  const fetchData = () => {
    if (recipesData.length === 0) {
      dispatch(actions.getRecipes());
    }
  };

  const searchInRecipe = () => {
    dispatch(actions.filterRecipes());
  };

  const loading = helper.isLoading(statusRecipesData);
  const error = helper.hasError(statusRecipesData);

  return (
    <div>
      <div>
        <div>
          <input
            type="search"
            name="search"
            value={searchCriteria}
            onChange={(e) => dispatch(actions.updateCriteria(e.target.value))}
          ></input>
        </div>
        <div>
          <button onClick={searchInRecipe}>Buscar</button>
        </div>
      </div>
      <div>
        <Link to="/scores">Ver Valoraciones</Link>
      </div>
      <div>
        {!loading && !error && (
          <RecipesTable source="home" recipesData={filteredRecipesData} />
        )}
        {!loading && error && <p>ha ocurrido un error</p>}
        {loading && <p>loading...</p>}
      </div>
    </div>
  );
};
export default Home;
