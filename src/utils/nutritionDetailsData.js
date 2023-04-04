export const prepareData = (data) => {
  const myData = Object.entries(data[0]);

  const stepsArr = myData
    .filter((x) => {
      const [a, b] = x;
      if (a.includes("directions") && b != null) {
        return true;
      }
      return false;
    })
    .map(([a, b]) => {
      if (b === null) {
        return false;
      }
      return { b };
    });

  const measurement = myData
    .filter((x) => {
      const [a, b] = x;
      if (a.includes("measurement") && b != null) {
        return true;
      }
      return false;
    })
    .map(([a, b]) => {
      return b;
    });

  let ingredients = myData
    .filter((x) => {
      const [a, b] = x;
      if (a.includes("ingredient") && b !== null) {
        return true;
      }
      return false;
    })
    .map(([a, b]) => {
      if (b === null) {
        return false;
      }
      return { b };
    });

  ingredients = measurement.map(
    (x, i) => `${!x ? "" : x} ${!ingredients[i].b ? "" : ingredients[i].b}`
  );

  ingredients = ingredients.filter((x) => x !== " ");

  return {
    stepsArr,
    ingredients,
  };
};
