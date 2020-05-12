/*
  Description :
  Creates an array excluding all given values.
  Arguments :
  1) The array to inspect.
  2) The values to exclude.
  Returns :
  The new array of filtered values.
*/

const without = (inspect, exclude) => {
  let newArray = [];

  //chercher si il a une occurence dans le tableau a inspecter exclude.indexOf(inspect[i])
  for (let i = 0; i < inspect.length; i++) {
    let supp = exclude.indexOf(inspect[i]);
    // si supp = -1 alors copier l'item dans un nouveau tableau
    if (supp === -1) {
      newArray.push(inspect[i]);
    }
  }
  return newArray;
};
console.log(without([2, 1, 2, 3, 4, 2], [1, 2, 4])); // Doit afficher `[3]`
