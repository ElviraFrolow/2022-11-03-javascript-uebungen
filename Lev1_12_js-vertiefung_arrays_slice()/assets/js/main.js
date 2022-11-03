let array = [
  "imageTeilnehmer000supercode.jpg",
  "imageTeilnehmer001supercode.jpg",
  "imageTeilnehmer002supercode.jpg",
  "imageTeilnehmer003supercode.jpg",
  "imageTeilnehmer004supercode.jpg",
  "imageTeilnehmer005supercode.jpg",
  "imageTeilnehmer006supercode.jpg",
  "imageTeilnehmer007supercode.jpg",
  "imageTeilnehmer008supercode.jpg",
  "imageTeilnehmer009supercode.jpg",
  "imageTeilnehmer010supercode.jpg",
  "imageTeilnehmer011supercode.jpg",
  "imageTeilnehmer012supercode.jpg",
  "imageTeilnehmer013supercode.jpg",
  "imageTeilnehmer014supercode.jpg",
  "imageTeilnehmer015supercode.jpg",
  "imageTeilnehmer016supercode.jpg",
  "imageTeilnehmer017supercode.jpg",
  "imageTeilnehmer018supercode.jpg",
  "imageTeilnehmer019supercode.jpg",
];

array.slice(7, 15);
console.log(array);

let otherArrays = array.slice(7, 15);
console.log(otherArrays);

let otherArrays2 = array.slice(6, 12);
console.log(otherArrays2);

// // Erster Parameter: Start
// // Zweiter Parameter: Ende (opitional)
// let newHeroes = heroes.slice(1, 4);
// console.log(newHeroes);

// // WICHTIG: slice verändert das ursprungs-array nicht!
// console.log(heroes);

// let otherHeroes = heroes.slice(1);
// console.log(otherHeroes);
