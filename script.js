class Card { // this just creates new cards for the game
  constructor(suit, rank, score){
    this.suit = suit
    this.rank = rank
    this.score = score
  }
}

class Deck { // use let ___ = new Deck() to call this class and all of its inside functions 
  constructor(){
    this.cards = []
    this.createDeck()
  }

  createDeck(){
    let suits = ["Heart", "Spade", "Club", "Diamond"];
    let ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];

    for(let i = 0; i < suits.length; i++){
      for(let j = 0; j < ranks.length; j++){
        this.cards.push(new Card(suits[i], ranks[j], j + 2))
      }
    }

    return this.cards
  }

  shuffle() { // this shuffles the deck, not too knowledgable on it but it works 
    let currentIndex = this.cards.length,  randomIndex;
  
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [this.cards[currentIndex], this.cards[randomIndex]] = [
        this.cards[randomIndex], this.cards[currentIndex]];
    }
  
    return this.cards;
  }

  draw(){
    return this.cards.pop()
  }
}

class GameofWar { // this is going to start/setup the game, we call this and assign it when we want the game to start
  constructor() {
    this.playerOne = [] // this array is will hold player 1's 26 cards 
    this.playerTwo = [] // this array will hold player 2's 26 cards 
    this.pile = [] // this array is just the pile of cards 
    this.gameSetup() // this is the function that will basically do everything for the game 
  }
  gameSetup() {
    this.gameDeck = new Deck() // making gameDeck a copy of the Deck class and all its functions 
    this.cards = this.gameDeck.cards // this.gameDeck.cards to access the deck of cards for the game
    // return this.playerTwo , this.playerOne
    console.log(this.gameDeck.cards)
  } 
}

let startGame = new GameofWar()
