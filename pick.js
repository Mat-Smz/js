/*
  Description :
  Creates an object composed of the picked object properties.
  Arguments :
  1) The source object.
  2) The property paths to pick.
  Returns :
  The new object.
*/

const pick = (ob, tab) => {
  const newOb = {};
  for (let i = 0; i < tab.length; i++) {
    newOb[tab[i]] = ob[tab[i]];
  }
  return newOb;
};

console.log(pick({ a: 1, b: "2", c: 3 }, ["a", "c"])); // Doit afficher { 'a': 1, 'c': 3 }

// Exemple fictif : console.log(variable[0].room.list[2][1].description);
