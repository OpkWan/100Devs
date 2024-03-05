//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value.toLowerCase()
//   const url = `https://www.dnd5eapi.co/api/spells/${choice}`
  const     url = `https://www.dnd5eapi.co/api/spells/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
       console.log(data.subclasses);
       
       data.subclasses.forEach( elem => {

        const retObj = document.createElement('li')

        retObj.textContent = elem.index

        document.querySelector('#ul1').appendChild(retObj)

       })

        data.subclasses.forEach( elem => {

        const retObj = document.createElement('li')

        retObj.textContent = elem.name

        document.querySelector('#ul2').appendChild(retObj)

       })

       data.subclasses.forEach( elem => {

        const retObj = document.createElement('li')

        retObj.textContent = elem.url

        document.querySelector('#ul3').appendChild(retObj)

       })
      
      
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

