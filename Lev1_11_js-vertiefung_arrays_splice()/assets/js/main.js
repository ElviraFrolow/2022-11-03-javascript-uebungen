let array = [
  "imageTeilnehmer000supercode.jpg",
  "imageTeilnehmer001supercode.jpg",
];
console.log(array);

array.splice(
  2,
  0,
  "imageTeilnehmer008supercode.jpg",
  "imageTeilnehmer009supercode.jpg",
  "imageTeilnehmer010supercode.jpg"
);

console.log(array);

array.splice(
  6,
  0,
  "imageTeilnehmer014supercode.jpg",
  "imageTeilnehmer015supercode.jpg",
  "imageTeilnehmer016supercode.jpg",
  "imageTeilnehmer017supercode.jpg",
  "imageTeilnehmer018supercode.jpg",
  "imageTeilnehmer019supercode.jpg"
);

console.log(array);

array.splice(
  2,
  0,
  "imageTeilnehmer02supercode.jpg",
  "imageTeilnehmer03supercode.jpg",
  "imageTeilnehmer04supercode.jpg",
  "imageTeilnehmer05supercode.jpg",
  "imageTeilnehmer06supercode.jpg",
  "imageTeilnehmer07supercode.jpg"
);

console.log(array);

array.splice(
  11,
  0,
  "imageTeilnehmer011supercode.jpg",
  "imageTeilnehmer012supercode.jpg",
  "imageTeilnehmer013supercode.jpg"
);

console.log(array);

// // .splice()
// // Erste Parameter: Wo soll hinzugefügt werden?
// // Zweite Parameter: Wie viele Elemente sollen gelöscht/überschrieben werden ?
// // Dritte/... Parameter: Neue Elemente
// console.log(
//   "%c Array Methods .splice()",
//   "color: tomato; background-color: gold;"
// );

// heroes.splice(2, 0, "Wario", "Luigi");
// console.log(heroes);

// // Sonic raus
// heroes.splice(1, 1);
// console.log(heroes);

// // Marzio raus
// heroes.splice(3, 1);
// console.log(heroes);

// // Warzio ersetzt Wario
// heroes.splice(1, 1, "Warzio");
// console.log(heroes);
