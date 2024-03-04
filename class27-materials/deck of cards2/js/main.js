let deck_id = "";

const url = "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";

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

document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const url = `https://www.deckofcardsapi.com/api/deck/${deck_id}/draw/?count=3`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);

      let player1Val = getCardValue(data.cards[0].value);
      let player2Val = getCardValue(data.cards[1].value);
      let player3Val = getCardValue(data.cards[2].value);

      console.log(player1Val);
      console.log(player2Val);
      console.log(player3Val);

      function getCardValue(cardVal) {
        if (cardVal === "ACE") {
          return 14;
        } else if (cardVal === "KING") {
          return 13;
        } else if (cardVal === "QUEEN") {
          return 12;
        } else if (cardVal === "JACK") {
          return 11;
        } else {
          return Number(cardVal);
        }
      }

      if (player1Val > player2Val && player1Val > player3Val) {
        document.querySelector("h3").innerText = "Player 1 Wins!!!";
        if (player1Val) {
          document.querySelector("h3").style.color = "red";
          document.querySelector("#player1").style.color = "red";
        }
      } else if (player2Val > player1Val && player2Val > player3Val) {
        document.querySelector("h3").innerText = "Player 2 Wins!!!";
        if (player2Val) {
          document.querySelector("h3").style.color = "gold";
          document.querySelector("#player2").style.color = "gold";
        }
      } else if (player3Val > player1Val && player3Val > player1Val) {
        document.querySelector("h3").innerText = "Player 3 Wins!!!";
        if (player3Val) {
          document.querySelector("h3").style.color = "green";
          document.querySelector("#player3").style.color = "green";
        }
      } else {
        document.querySelector("h3").innerText = "DRAWWWWW";
        document.querySelector("h3").style.color = "blue";
      }
      document.querySelector("#card1").src = data.cards[0].image;
      document.querySelector("#card2").src = data.cards[1].image;
      document.querySelector("#card3").src = data.cards[2].image;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
