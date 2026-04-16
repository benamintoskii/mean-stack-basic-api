const express = require("express");
const app = express();

app.use(express.json());

let items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" }
];

app.get("/items", (req, res) => {
  res.json(items);
});

app.post("/items", (req, res) => {
  const newItem = {
    id: items.length + 1,
    name: req.body.name
  };

  items.push(newItem);
  res.json(newItem);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
