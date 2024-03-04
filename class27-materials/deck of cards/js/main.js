//Example fetch using pokemonapi.co

let deck_id = "";

const url = `https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`;

fetch(url)
  .then((res) => res.json()) // parse response as JSON
  .then((data) => {
    console.log(data);

    deck_id = data.deck_id;
    console.log(deck_id);
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });

document.querySelector("button").addEventListener("click", playGame);

function playGame() {
  const url = `https://www.deckofcardsapi.com/api/deck/${deck_id}/draw/?count=2`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);

      let player1Val = convertCardValue(data.cards[0].value);
      let player2Val = convertCardValue(data.cards[1].value);

      function convertCardValue(cardVal) {
        if (cardVal === "JACK") {
          return 11;
        } else if (cardVal === "QUEEN") {
          return 12;
        } else if (cardVal === "KING") {
          return 13;
        } else if (cardVal === "ACE") {
          return 14;
        } else {
          return Number(cardVal);
        }
      }

      document.querySelector("#img1").src = data.cards[0].image;
      document.querySelector("#img2").src = data.cards[1].image;
      document.querySelector(
        "#name1"
      ).innerText = `Player 1: Your Card is ${data.cards[0].value} Of ${data.cards[0].suit}`;
      document.querySelector(
        "#name2"
      ).innerText = `Player 1: Your Card is ${data.cards[1].value} Of ${data.cards[1].suit}`;

      if (player1Val > player2Val) {
        document.querySelector("h3").innerText = "Player 1 Wins";
      } else if (player1Val < player2Val) {
        document.querySelector("h3").innerText = "Player 2 Wins";
      } else {
        document.querySelector("h3").innerText = "IT IS DRAWWW";
      }
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
