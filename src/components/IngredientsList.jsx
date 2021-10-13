import React from "react";

const IngredientsList = ({ amountOfPeople, list }) => {
  return (
    <ul>
      {list.map((item) => (
        <li>{`${amountOfPeople * item.unitShare} kg ${item.name}`}</li>
      ))}
    </ul>
  );
};
export default IngredientsList;
