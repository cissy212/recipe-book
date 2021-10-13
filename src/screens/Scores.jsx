import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Scores = () => {
  const dispatch = useDispatch();
  const { scoresData, statusScoresData } = useSelector(
    (state) => state.mainReducer
  );

  return <div></div>;
};
export default Scores;
