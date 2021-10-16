import React from "react";

const Steps = ({ list }) => {
  return (
    <ul>
      {list?.map((item, key) => (
        <li key={key}>{`${item}`}</li>
      ))}
    </ul>
  );
};
export default Steps;
