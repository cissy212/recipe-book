import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, useHistory } from "react-router-dom";
import * as actions from "../actions";
import * as helper from "../helpers";
import IngredientsList from "../components/IngredientsList";

const Recipe = () => {
  const [inputPeople, setInputPeople] = useState(1);
  const [selectedScore, setSelectedScore] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const { selectedRecipeData, statusSelectedRecipeData } = useSelector(
    (state) => state.mainReducer
  );

  const [localError, setLocalError] = useState(false);

  let { id } = useParams();

  useEffect(() => {
    if (!isNaN(id)) {
      fetchData(parseInt(id));
    } else {
      setLocalError(true);
    }
  }, [id]);

  const fetchData = (id) => {
    dispatch(actions.getSelectedRecipe(id));
  };

  const saveRecipeScore = () => {
    if (selectedScore !== "") {
      dispatch(
        actions.saveRecipeScore(selectedRecipeData.id, parseInt(selectedScore))
      );
      history.push("/");
    } else {
      alert("seleccione un puntaje valido");
    }
  };

  const loading = helper.isLoading(statusSelectedRecipeData);
  const error = helper.hasError(statusSelectedRecipeData);
  console.log(selectedRecipeData);
  return (
    <div>
      <div>
        {!loading &&
          !error &&
          !localError &&
          (selectedRecipeData ? (
            <>
              <p>
                <b>{`${selectedRecipeData.name} (${selectedRecipeData.score})`}</b>
              </p>
              Tabs
              <IngredientsList
                amountOfPeople={9}
                list={selectedRecipeData.ingredients}
              />
              <div>
                <select
                  value={selectedScore}
                  onChange={(e) => setSelectedScore(e.target.value)}
                >
                  <option value={""}>Puntaje</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
                <button onClick={saveRecipeScore}>Guardar</button>
              </div>
            </>
          ) : (
            <p>No existe esa receta</p>
          ))}
        {!loading && error && !localError && <p>ha ocurrido un error</p>}
        {loading && !localError && <p>loading...</p>}
        {localError && <p> el id de la receta es incorrecto</p>}
      </div>
      <div>
        <Link to="/">Volver</Link>
      </div>
    </div>
  );
};
export default Recipe;
