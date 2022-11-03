let getraenke = [
  "Coca-Cola",
  "Apfelsaft",
  "Pepsi",
  "Traubensaft",
  "Sprite",
  "Orangensaft",
  "Red Bull Energy Drink",
  "Fanta",
];

let upperDrinks = getraenke.map((x) => {
  return x.toUpperCase();
});

console.log(upperDrinks);

// // .map()
// // .map() geht durch jedes element des arrays und gibt ein neues array zurück
// // map verändert das ursprungliche array NICHT!
// console.log("%c Array Methods .map()", "color: tomato; background-color: gold;");

// let numbers3 = [10, 5, 2, 4];
// console.log(numbers3);

// let numbers4 = numbers3.map((x) => {
//     return x * 2;
// })

// console.log(numbers4);
