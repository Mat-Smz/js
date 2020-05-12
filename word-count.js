const wordCount = (str) => {
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == " ") {
      count = count + 1;
    }
  }
  return count;

  // extraire lettre par lettre
  // comparer cette lettre avec espace
  // si c est un espace, incrementer une valeur
};

console.log(wordCount("demain des l'aube"));
