//Example fetch using pokemonapi.co
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const startDate = document.querySelector("#startDate").value;
  // const endDate = document.querySelector("#endDate").value;
  console.log(startDate);
  // console.log(endDate);

  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=akscOsaoBUQT3QgEeLHypxfISD8CYVX8gGvNNaae`;

  // https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=akscOsaoBUQT3QgEeLHypxfISD8CYVX8gGvNNaae

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      // if (data.media_type === "video") {
      //   document.querySelector("iframe").src = data.url;
      // } else if (data.media_type === "image") {
      //   document.querySelector("img").src = data.hdurl;
      // }
      document.querySelector("#img1").src = data.photos[0].img_src;
      document.querySelector("#name1").innerText =
        data.photos[0].camera.full_name;
      document.querySelector("#img2").src = data.photos[1].img_src;
      document.querySelector("#name2").innerText =
        data.photos[1].camera.full_name;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
