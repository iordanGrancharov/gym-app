export const generateRandomElements = (data) => {
  const randomIndexes = new Set();
  while (randomIndexes.size < 3) {
    const index = Math.floor(Math.random() * data.length);
    randomIndexes.add(index);
  }

  const randomReceipts = Array.from(randomIndexes).map((index) => data[index]);

  return randomReceipts;
};
