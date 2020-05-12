// 13 caractères plus loin dans l'ordre alphabétique.
// z devient m et Z devient M. Les majuscules restent des majuscules, les minuscules restent des minuscules.
// assigner a chaque lettre un nombre
// console.log(rot13("abcdefg")); // nop
// console.log(rot13("My horseisAmazing.")); // Zl ubefr vf Nznmvat.
// console.log(rot13("AkjhZ zLKIJz , 23y")); // NxwuM mYXVWm , 23l
// console.log(rot13("-12")); // -1

const rot13 = (str) => {
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  let alphaArray = alpha.split("");
  let alphA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let alphAArray = alphA.split("");
  let position;
  let letter13;
  let result13 = [];
  let result;

  // extraire chaque lettre de str avec charAt(i)
  for (let i = 0; i < str.length; i++) {
    let letter = str.charAt(i);

    // si c est autre chose qu'une lettre le conserver
    if (
      alphaArray.indexOf(letter) === -1 &&
      alphAArray.indexOf(letter) === -1
    ) {
      letter13 = letter;
    } else {
      // si la lettre est une majuscule
      if (alphaArray.indexOf(letter) === -1) {
        letter13 = str.charAt(i);
        // identifier la position numérique de cette valeur
        position = alphAArray.indexOf(letter13);

        // rajouter 13 à cette variable
        position = position + 13;

        // si la variable est supérieur à 25, la faire revenir a zero
        if (position > 25) {
          position = position - 26;
        }
        //identifier l'item du tableau de cryptage ayant pour valeur la variable
        letter13 = alphAArray[position];
      } else {
        // identifier la position numérique de cette valeur
        position = alphaArray.indexOf(letter);

        // rajouter 13 à cette variable
        position = position + 13;

        // si la variable est supérieur à 25, la faire revenir a zero
        if (position > 25) {
          position = position - 26;
        }
        //identifier l'item du tableau de cryptage ayant pour valeur la variable
        letter13 = alphaArray[position];
      }
    }
    // mettre la lettre dans un tableau13
    result13.push(letter13);

    //transformer le tableau13 en chaine de caractère
    result = result13.join("");
  }
  return result;
};
console.log(rot13("abc")); // nop
console.log(rot13("My horse is Amazing.")); // Zl ubefr vf Nznmvat.
console.log(rot13("AkjhZ zLKIJz , 23y")); // NxwuM mYXVWm , 23l
console.log(rot13("-12")); // -12
