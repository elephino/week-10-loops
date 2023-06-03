const cards = ['diamond', 'spade', 'heart', 'club'];

let counter = 1;
let currentCard = cards[Math.floor(Math.random() * 4)];
console.log(`Card #${counter} is a ${currentCard}`);

while ( currentCard.valueOf() != 'diamond') {
  counter++;
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(`Card #${counter} is a ${currentCard}`);
}
