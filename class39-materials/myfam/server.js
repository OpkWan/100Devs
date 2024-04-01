const express = require("express");
const app = express();
const PORT = 2121;

const family = {
  father: {
    "family name": "Opoku",
    "first name": "Alex",
    age: 30,
    "birth month": "May",
    "birth year": 1993,
    "shoe size": 45,
  },
  mother: {
    "family name": "Shaibu",
    "first name": "Munira",
    age: 28,
    "birth month": "March",
    "birth year": 1995,
    "shoe size": 40,
  },
  son: {
    "family name": "Opoku-Issah",
    "first name": "Alman Yusif",
    age: 4,
    "birth month": "November",
    "birth year": 2019,
    "shoe size": 13,
  },
  "first daughter": {
    "family name": "Opoku-Issah",
    "first name": "Almira Habiba",
    age: 3,
    "birth month": "January",
    "birth year": 2021,
    "shoe size": 11,
  },
  "second daughter": {
    "family name": "Opoku-Issah",
    "first name": "Almeira Hawa",
    age: 1,
    "birth month": "March",
    "birth year": 2022,
    "shoe size": 6,
  },
  unknown: {
    "family name": "Unknown",
    "first name": "Unknown",
    age: "Unknown",
    "birth month": "Unknown",
    "birth year": "Unknown",
    "shoe size": "Unknown",
  },
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api", (req, res) => {
  res.json(family);
});

app.get("/api/:name", (req, res) => {
  const fName = req.params.name.toLocaleLowerCase();
  if (family[fName]) {
    res.json(family[fName]);
  } else {
    res.json(family["unknown"]);
  }
});

app.listen(PORT, () => {
  console.log(`Server is currently ACTIVE on ${PORT}`);
});
