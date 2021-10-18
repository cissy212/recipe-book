import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, useHistory } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./Screens.css";
import "react-tabs/style/react-tabs.css";
import * as actions from "../actions";
import * as helper from "../helpers";
import IngredientsList from "../components/IngredientsList";
import Steps from "../components/Steps";

const Recipe = () => {
  const [inputPeople, setInputPeople] = useState(1);
  const [selectedScore, setSelectedScore] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const { selectedRecipeData, statusSelectedRecipeData } = useSelector(
    (state) => state.mainReducer
  );
  const [localError, setLocalError] = useState(false);

  let { id, source } = useParams();

  useEffect(() => {
    if (id) {
      fetchData(id);
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

      history.push(source === "home" ? "/" : `/${source}`);
    } else {
      alert("seleccione un puntaje valido");
    }
  };

  const loading = helper.isLoading(statusSelectedRecipeData);
  const error = helper.hasError(statusSelectedRecipeData);

  return (
    <div>
      <div className="recipe-container column">
        {!loading &&
          !error &&
          !localError &&
          (selectedRecipeData ? (
            <>
              <h2 className="title">
                <b>{`${selectedRecipeData.name} (${selectedRecipeData.scores})`}</b>
              </h2>
              <Tabs>
                <TabList>
                  <Tab>Ingredientes</Tab>
                  <Tab>Pasos</Tab>
                </TabList>

                <TabPanel>
                  <label>Para</label>
                  <input
                    className="styled-input input-tabs"
                    type="number"
                    name="amount"
                    value={inputPeople}
                    onChange={(e) => setInputPeople(e.target.value)}
                  ></input>
                  <label>personas</label>
                  <IngredientsList
                    amountOfPeople={inputPeople}
                    list={selectedRecipeData.ingredients}
                  />
                </TabPanel>
                <TabPanel>
                  <Steps list={selectedRecipeData.steps} />
                </TabPanel>
              </Tabs>

              <div className="recipe-container width">
                <select
                  className="select-css"
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
                <button className="styled-button" onClick={saveRecipeScore}>
                  Guardar
                </button>
              </div>
            </>
          ) : (
            <p>No existe esa receta</p>
          ))}
        {!loading && error && !localError && <p>ha ocurrido un error</p>}
        {loading && !localError && <p>loading...</p>}
        {localError && <p> el id de la receta es incorrecto</p>}
        <div>
          <Link to="/" className="links">
            ←Volver
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Recipe;
