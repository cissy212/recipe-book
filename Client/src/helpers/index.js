export const isLoading = (status) => Boolean(status === "loading");

export const hasError = (status) => Boolean(status === "error");

export const sortByCriteria = (list, criteria, order = "asc") => {
  const result = list.sort((a, b) => {
    if (a[criteria] > b[criteria]) {
      return order === "asc" ? 1 : -1;
    }
    if (a[criteria] < b[criteria]) {
      return order === "asc" ? -1 : 1;
    }
    // a must be equal to b
    return 0;
  });
  return result;
};

export const isCriteriaInIngredients = (list, criteria) => {
  return (
    list.filter(
      (item) => item.name.toLowerCase().indexOf(criteria?.toLowerCase()) > -1
    ).length > 0
  );
};
export const filterRecipes = (list, criteria) => {
  return list.filter(
    (item) =>
      item.name.toLowerCase().indexOf(criteria?.toLowerCase()) > -1 ||
      isCriteriaInIngredients(item.ingredients, criteria)
  );
};

export const getAverage = (scores) => {
  const average = (scores) => {
    const total = scores.reduce((acc, c) => acc + c, 0);
    return total / scores.length;
  };
  return average(scores).toFixed(2);
};
