function csvToJSON(matrix) {
  const [, ...jsonResult] = matrix.map((_, i) =>
    Object.assign(
      {},
      ...matrix[0].map((h, index) => ({ [h]: matrix[i][index] }))
    )
  );

  return jsonResult;
}

export default csvToJSON;
