const readline = require("readline"); // pour avoir accès au module `readline`
const rl = readline.createInterface(process.stdin, process.stdout); // précise l'interface d'entrée et l'interface de sortie. stdin et stdout représentent le terminal qui exécute le programme.

// let counter = 0;

const onAnswer = answer => {
  answer = Number(answer); // type number
  // console.log(secretNumber); // type number

  if (answer === secretNumber) {
    console.log("Bravo, vous avez trouvé le nombre mystère !");
    rl.close(); // cette ligne permet d'arrêter d'écouter les entrées de l'utilisateur. Elle doit être exécutée, une seule fois, à la toute fin du programme
  } else if (answer > secretNumber) {
    console.log("C'est moins !");
    // counter++;

    // poser de nouveau la question
    rl.question("Quel est le nombre? ", onAnswer); // permet d'écouter les entrées de l'utilisateur
  } else {
    console.log("C'est plus !");
    // counter++;

    // poser de nouveau la question
    rl.question("Quel est le nombre? ", onAnswer); // permet d'écouter les entrées de l'utilisateur
  }
};

const secretNumber = Math.round(Math.random() * 100);
console.log("secretNumber", secretNumber);

rl.question("Quel est le nombre? ", onAnswer); // permet d'écouter les entrées de l'utilisateur
