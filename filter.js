/*
  Description :
  Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The predicate is invoked with one argument: value.
  Arguments :
  1) The collection to iterate over.
  2) The function invoked per iteration.
  
  Returns :
  The new filtered array.
*/

const filter = (tab, func) => {
  const newTab = [];

  if (func && tab) {
    for (let i = 0; i < tab.length; i++) {
      // tab[i] vaut 12 puis 5 puis 8 etc.
      if (func(tab[i]) === true) {
        newTab.push(tab[i]);
      }
    }
  }

  return newTab;
};

const isBigEnough = (value) => {
  if (value >= 10) {
    return true;
  }
  return false;
};
console.log(filter([12, 5, 8, 130, 44], isBigEnough)); // Doit afficher `[12, 130, 44]`
console.log(filter([1, 6, 173, 151])); // Doit afficher `[]`
console.log(filter(null, isBigEnough)); // Doit afficher `[]`
