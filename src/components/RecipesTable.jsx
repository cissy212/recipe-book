import React from "react";
import { Link } from "react-router-dom";
import "./Table.css";

const RecipesTable = ({ recipesData, source }) => {
  return (
    <div>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Receta</th>
            <th>Puntaje</th>
          </tr>
        </thead>
        <tbody>
          {recipesData.map((item, key) => (
            <tr key={key}>
              <td>
                <Link to={`/recipe/${item.id}/${source}`}>{item.name}</Link>
              </td>
              <td>{item.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default RecipesTable;
