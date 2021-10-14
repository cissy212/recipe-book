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

export const filterRecipes = (list, criteria) => {
  return list.filter(
    (item) =>
      item.name.toLowerCase().indexOf(criteria?.toLowerCase()) > -1 ||
      (item.ingredients.length > 0 &&
        item.ingredients.filter(
          (ingredient) =>
            ingredient.name.toLowerCase().indexOf(criteria?.toLowerCase()) > -1
        ))
  );
};
