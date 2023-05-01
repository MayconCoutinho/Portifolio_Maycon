export const SortingId = (dados) => {
  const result = dados.sort((a, b) => {
    return a.id - b.id;
  });
  return result;
};
