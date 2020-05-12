const swapCase = (tab) => {
  // Le tableau qui sera retourné
  const newTab = [];
  for (let i = 0; i < tab.length; i++) {
    const sentence = tab[i]; // "Hello", "Le Reacteur"
    let newSentence = ""; // La nouvelle chaine de caracteres qui aura la casse inversées
    for (let j = 0; j < sentence.length; j++) {
      const char = sentence[j]; // "H", "e", "l", ...
      if (char.toLowerCase() === char) {
        // cette lettre est en minuscule
        newSentence = newSentence + char.toUpperCase();
      } else {
        // cette lettre est en majuscule
        newSentence = newSentence + char.toLowerCase();
      }
    }
    // on ajoute la nouvelle phrase dans le tableau qu'on va retourner
    newTab.push(newSentence);
  }

  return newTab;
};

console.log(swapCase(["Hello", "Mat"])); // Affichera : ["hELLO", "mAT"]

// for (let i = 0; i < tab.length; i++) {
//  for (let j = 0; j < tab[i].length; j++) {
//     console.log(tab[i][j]); // tab[i][j] represente chaque lettre de chaque phrase
//  }
// }
