const express = require("express");
const app = express();
const PORT = 8000;

const rappers = {
  "opk wan": {
    age: 30,
    "birth Month": "May",
    cityOfBirth: "Cape Coast",
  },
  aya: {
    age: 32,
    "birth Month": "March",
    cityOfBirth: "Kumasi",
  },
  alman: {
    age: "ALMAN",
    "birth Month": "ALMAN",
    cityOfBirth: "ALMAN",
  },
};

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/api/:rapperName", (request, response) => {
  const rapperNameP = request.params.rapperName.toLocaleLowerCase();
  if (rapperNameP) {
    response.json(rappers[rapperNameP]);
  } else {
    response.json(rappers[alman]);
  }
});

app.listen(8000, () => {
  console.log(`We are live on port ${PORT}`);
});
