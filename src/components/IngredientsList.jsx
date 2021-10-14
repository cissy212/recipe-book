import React from "react";

const IngredientsList = ({ amountOfPeople, list }) => {
  return (
    <ul>
      {list?.map((item, key) => (
        <li key={key}>{`${amountOfPeople * item.unitShare} kg ${
          item.name
        }`}</li>
      ))}
    </ul>
  );
};
export default IngredientsList;
