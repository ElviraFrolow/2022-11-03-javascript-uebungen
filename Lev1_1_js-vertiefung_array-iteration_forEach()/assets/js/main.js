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

getraenke.sort();
console.log(getraenke);

getraenke.forEach((myDrinks) => {
  console.log(myDrinks);
  document.write(myDrinks);
});

// games.forEach((pusteblume) => {
//   console.log(pusteblume);
// });

// let images = ["https://www.unsplash.it/200?1", "https://www.unsplash.it/200?2", "https://www.unsplash.it/200?3", "https://www.unsplash.it/200?4", "https://www.unsplash.it/200?5", "https://www.unsplash.it/200?6", "https://www.unsplash.it/200?7", "https://www.unsplash.it/200?8", "https://www.unsplash.it/200?9", "https://www.unsplash.it/200?10"];

// const bilder = document.querySelector("#bilder");
// // console.log(bilder);

// images.forEach((elt, index) => {
//   console.log(elt);
//   console.log(index);
//   // bilder.innerHTML += `<img src="${elt}" alt="random">`
// })

// // .map()
// // .map() geht durch jedes element des arrays und gibt ein neues array zurück
// // map verändert das ursprungliche array NICHT!
// console.log("%c Array Methods .map()", "color: tomato; background-color: gold;");

// let numbers3 = [10, 5, 2, 4];
// console.log(numbers3);

// let numbers4 = numbers3.map((x) => {
//   return x * 2;
// })

// console.log(numbers4);
