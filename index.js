// function saludar() {
//   return "Hola";
// }

const saludar = () => {
  return "Hola";
};

// function division(a, b) {
//   return a / b;
// }

const division = (a, b) => {
  return a / b;
};

// function miNombre(nombre) {
//   return `Mi nombre es ${nombre}`;
// }

const miNombre = (nombre) => {
  return `Mi nombre es ${nombre}`;
};

// function test2() {
//   console.log("Función test 2 ejecutada.");
// }
// function test1(callback) {
//   callback();
// }

const test2 = () => {
  console.log("Función test 2 ejecutada.");
};
const test1 = (callback) => {
  callback();
};

let gente = [
  {
    nombre: "Jamiro",
    edad: 45,
  },
  {
    nombre: "Juan",
    edad: 35,
  },
  {
    nombre: "Paco",
    edad: 34,
  },
  {
    nombre: "Pepe",
    edad: 14,
  },
  {
    nombre: "Pilar",
    edad: 24,
  },
  {
    nombre: "Laura",
    edad: 24,
  },
  {
    nombre: "Jenny",
    edad: 10,
  },
];

const arrayMag25 = gente.map((element) => {
  if (element.edad > 25) {
    return element;
  }
});

console.log(arrayMag25.filter((element) => !!element));

const peopleStartJ = gente.map((element) => {
  if (element.nombre[0] === "J") {
    return element;
  }
});

console.log(peopleStartJ.filter((element) => !!element));

const numbers = [4, 5, 6, 7, 8, 9, 10];
const numbersDouble = numbers.map((number) => {
  return number ** number;
});
console.log(numbersDouble);

const numbersF = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbersF.filter((number) => !(number % 2 === 0)));

const foodList = [
  { name: "Tempeh", isVeggie: true },
  { name: "Cheesbacon burguer", isVeggie: false },
  { name: "Tofu burguer", isVeggie: true },
  { name: "Entrecot", isVeggie: false },
];

const affirm = foodList
  .filter((elem) => elem.isVeggie)
  .map(
    (elem, index) =>
      `Que ric${index === 0 ? "o" : "a"} ${elem.name} me voy a comer!`
  );
console.log(affirm);

const numerosMult = [39, 2, 4, 25, 62];

console.log(numerosMult.reduce((acc, b) => acc * b, 1));

//EXTRAS

const staff = [
  {
    name: "Pepe",
    role: "The Boss",
    hobbies: ["leer", "ver pelis"],
  },
  {
    name: "Ana",
    role: "becaria",
    hobbies: ["nadar", "bailar"],
  },
  {
    name: "Luis",
    role: "programador",
    hobbies: ["dormir", "comprar"],
  },
  {
    name: "Carlos",
    role: "secretario",
    hobbies: ["futbol", "queso"],
  },
];

console.log(
  staff.map(
    (el) =>
      `${el.name} es ${el.role} le gusta ${el.hobbies.reduce(
        (acc, b) => acc + " y " + b
      )} `
  )
);

const foodListGood = ["Pizza", "Ramen", "Paella", "Entrecot"];
const countryFood = ["Italia", "Japón", "Valencia", null];

const elemFood = foodListGood.map((el, index) =>
  countryFood[index]
    ? `Como soy de ${countryFood[index]}, amo comer ${el}`
    : `Aunque no como carne, el ${el} es sabroso`
);
console.log(elemFood);
//Resultado esperado
/* [
    'Como soy de Italia, amo comer Pizza',
    'Como soy de Japón, amo comer Ramen',
    'Como soy de Valencia, amo comer Paella',
    'Aunque no como carne, el Entrecot es sabroso'
   ]
*/

const inventory = [
  {
    name: "Mobile phone",
    price: 199,
  },
  {
    name: "TV Samsung",
    price: 459,
  },
  {
    name: "Viaje a cancún",
    price: 600,
  },
  {
    name: "Mascarilla",
    price: 1,
  },
];

console.log(inventory.filter((el) => el.price > 300).map((item) => item.name));
/*
        [
          'TV Samsung,',
          'Viaje a Cancún'
        ]
      */

const sentenceElements = [
  "Me",
  "llamo",
  "Eusebio",
  "y",
  "quiero",
  "sentir",
  "la",
  "fuerza",
  "con",
  "javascript",
];

console.log(sentenceElements.reduce((acc, b) => acc + " " + b));
