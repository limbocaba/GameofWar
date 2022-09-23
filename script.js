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
    this.shuffle()
    this.draw()
  }

  createDeck(){ // this creates a new deck with cards going up to 13 in 4 different suits 
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
  
      [this.cards[currentIndex], this.cards[randomIndex]] =[
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
    let gameDeck = new Deck() // making gameDeck a copy of the Deck class and all its functions 
    let cards = gameDeck.cards // this.gameDeck.cards to access the deck of cards for the game
    this.playerOne = cards.slice(0, cards.length / 2) // split the game deck in half and gave those cards to player one
    // console.log(this.playerOne)
    this.playerTwo = cards.slice(cards.length / 2) // split the deck again and gave these cards to player 2 
    // console.log(this.playerTwo)
  } 

  startGame() {
    while (this.playerOne.length > 0 && this.playerTwo.length > 0) {
    let playerOne = this.playerOne.pop()
    let playerTwo = this.playerTwo.pop()


      if (playerOne.score > playerTwo.score) {
        console.log('Player One Wins!')
        this.playerOne.unshift(playerOne, playerTwo, ...this.pile) // gives the card to player if they win
        this.pile.length = 0 // so the cards dont duplicate
      } else if (playerTwo.score > playerOne.score) {
        console.log('Player Two Wins!')
        this.playerTwo.unshift(playerTwo, playerOne, ...this.pile) // gives the card to the player if they win
        this.pile.length = 0 // so the cards do not duplicate
      } else {
        console.log("WAR")
        this.war(playerOne, playerTwo)
      }
    }
    if (this.playerOne.length > 0) {
      console.log("Player One Wins the Game of War!")
    } else {
      console.log("Player Two Wins the Game of War!")
    }
  }

  war(card1, card2) {
    this.pile.push(card1, card2)

    if (this.playerOne.length >= 4 && this.playerTwo.length >= 4) {
      this.pile.push(...this.playerOne.splice(this.playerOne.length - 3, 3)) // pushing cards into the pile for war 
      this.pile.push(...this.playerTwo.splice(this.playerTwo.length - 3, 3)) // pushing cards into the pile for war 
    } else if (this.playerOne.length < 4 && this.playerTwo.length >= 4) { // dumb impossible situation that cant happen 
      this.playerOne.unshift(...this.pile)
      this.playerOne.unshift(...this.playerTwo)
      this.playerTwo.length = 0;
      this.pile.length = 0;
    } else {
      this.playerTwo.unshift(...this.pile)
      this.playerTwo.unshift(...this.playerOne)
      this.playerOne.length = 0;
      this.pile.length = 0;
    }
  }
}



let game = new GameofWar()
console.log(game.startGame())
// let game = new Playing()
