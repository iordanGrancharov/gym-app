export const exerciseDbOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2b3b707282mshefa4d93da030bf1p15a383jsn5954a9f76cf6",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
