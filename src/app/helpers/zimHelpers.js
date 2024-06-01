export const convertToArr = (lineCords) => {
  let arr = [];
  for (let i = 0; i < lineCords.length; i++) {
    arr.push([Number(lineCords[i].x), Number(lineCords[i].y)]);
  }

  return arr;
};

export const multiDimensionalUnique = (arr) => {
  let uniques = [];
  let itemsFound = {};
  for (let i = 0, l = arr.length; i < l; i++) {
    let stringified = JSON.stringify(arr[i]);
    if (itemsFound[stringified]) {
      continue;
    }
    uniques.push(arr[i]);
    itemsFound[stringified] = true;
  }
  return uniques;
};

export const inside = (point, vs) => {
  let x = point[0],
    y = point[1];
  let inside = false;
  for (let i = 0, j = vs.length - 1; i < vs.length; j = i++) {
    let xi = vs[i][0],
      yi = vs[i][1];
    let xj = vs[j][0],
      yj = vs[j][1];

    let intersect =
      yi > y != yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
};
