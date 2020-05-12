/*
  Description :
  Gets the size of collection by returning its length.
  Arguments :
  1) The collection to inspect.
  Returns :
  The collection size.
*/

const size = (value) => {
  // console.log(typeof "pebbles"); // string
  // console.log(typeof [1,2,3]); // object

  // Il n'y a pas que les tableaux qui ont le type "object"
  if (Array.isArray(value) === true) {
    return value.length;
  }

  if (typeof value === "string") {
    return value.length;
  }

  return 0;
};

console.log(size("pebbles")); // Doit afficher `7`

// Voir https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
console.log(size([1, 2, 3])); // Doit afficher `3`
console.log(size()); // Doit afficher `0`
console.log(size(null)); // Doit afficher `0`
console.log(size(10)); // Doit afficher `0`
console.log(size(true)); // Doit afficher `0`
