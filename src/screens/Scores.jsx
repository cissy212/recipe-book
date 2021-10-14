import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Link } from "react-router-dom";
import * as actions from "../actions";
import * as helper from "../helpers";
import RecipesTable from "../components/RecipesTable";

const Scores = () => {
  const dispatch = useDispatch();
  const { recipesData, statusRecipesData } = useSelector(
    (state) => state.mainReducer
  );

  useEffect(() => {
    fetchData();
  }, []);

  //using same recipesData to avoid duplicated data. in the future if the data changes another action and data sets would be needed
  const fetchData = () => {
    if (recipesData.length === 0) {
      dispatch(actions.getRecipeSummary());
    }
  };

  const loading = helper.isLoading(statusRecipesData);
  const error = helper.hasError(statusRecipesData);

  return (
    <div>
      <h3>Valoraciones</h3>
      {!loading && error && <p>ha ocurrido un error</p>}
      {loading && <p>loading...</p>}
      {!loading && !error && (
        <Tabs>
          <TabList>
            <Tab>Mejor Puntaje</Tab>
            <Tab>Peor Puntaje</Tab>
          </TabList>

          <TabPanel>
            <div>
              <RecipesTable
                recipesData={helper.sortByCriteria(
                  [...recipesData],
                  "score",
                  "desc"
                )}
              />
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <RecipesTable
                recipesData={helper.sortByCriteria([...recipesData], "score")}
              />
            </div>
          </TabPanel>
        </Tabs>
      )}
      <div>
        <Link to="/">Volver</Link>
      </div>
    </div>
  );
};
export default Scores;
