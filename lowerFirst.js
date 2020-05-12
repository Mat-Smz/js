const lowerFirst = str => {
  const array = [];
  let lower = "";
  for (let i = 0; i < str.length; i++) {
    array[i] = str.charAt(i);
  }
  array[0] = array[0].toLowerCase();
  lower = array.join("");
  return lower;
};
// mettre chaque lettre de str dans un tableau
//mettre la première lettre du tableau en miniscule
//rassembler toutes les cellules dans une cellule unique
console.log(lowerFirst("Fred")); // Doit afficher `fred`
