/*
  Trier cette chaine par ordre alphabetique
*/

const alphabetSoup = (str) => {
  // str.sort(); // str.sort is not a function

  // 1. Convertir en tableau
  const tab = str.split(""); // split("") permet de creer un tableau qui va separer chacune des lettres

  // 2. Trier le tableau
  tab.sort();

  // 3. Convertir en chaine de caracteres
  const newStr = tab.join("");

  return newStr;
};

console.log(alphabetSoup("hello")); // Affichera "ehllo"
