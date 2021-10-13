import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../actions";
import * as helper from "../helpers";

const Home = () => {
  const [inputSearch, setInputSearch] = useState("");
  const dispatch = useDispatch();
  const { recipesData, statusRecipesData } = useSelector(
    (state) => state.mainReducer
  );

  useEffect(() => {
    console.log("fetch data");
    fetchData();
  }, []);

  const fetchData = () => {
    dispatch(actions.getRecipeSummary());
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
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
          ></input>
        </div>
        <div>
          <button>Buscar</button>
        </div>
      </div>
      <div>
        <Link to="/scores">Ver Valoraciones</Link>
      </div>
      <div>
        {!loading && !error && (
          <table border={1}>
            <thead>
              <tr>
                <th>Receta</th>
                <th>Puntaje</th>
              </tr>
            </thead>
            <tbody>
              {recipesData.map((item) => (
                <tr>
                  <td>
                    <Link to={`/recipe/${item.id}`}>{item.name}</Link>
                  </td>
                  <td>{item.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {!loading && error && <p>ha ocurrido un error</p>}
        {loading && <p>loading...</p>}
      </div>
    </div>
  );
};
export default Home;
