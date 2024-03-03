//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  // const choice = document.querySelector('input').value
  const url = 'https://lucifer-quotes.vercel.app/api/quotes'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data[0].quote
        document.querySelector('h3').innerText = data[0].author
        // document.querySelector('img').src = data.types[0].type.url
        document.querySelector('h3').innerText = data[0].author
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

