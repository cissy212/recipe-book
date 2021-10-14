import React from "react";
import { Link } from "react-router-dom";

const RecipesTable = ({ recipesData }) => {
  return (
    <div>
      <table border={1}>
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
                <Link to={`/recipe/${item.id}`}>{item.name}</Link>
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
