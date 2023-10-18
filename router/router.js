import express from "express";

const router = express.Router();
let ShoppingList = [
  { id: "shoe", cost: "50K" },
  { id: "PS5", cost: "500K" },
];

router
  .route("/items/")
  // Get list of items
  .get((req, res) => {
    res.send(ShoppingList);
  })

  // Add an item to the list
  .post((req, res) => {
    ShoppingList.push(req.body);
    res.send(ShoppingList);
    console.log(ShoppingList);
  });

router
  .route("/items/:id")
  // Retrieve the cost of an item in the list
  .get((req, res) => {
    const key = req.params.id;
    const value = ShoppingList.find((item) => item.id === key);

    res.send(value);
  })

  // Update an existing item in the list
  .patch((req, res) => {
    const key = req.params.id;
    const newValue = req.body;
    const oldValue = ShoppingList.find((item) => item.id === key);
    const oldValueIndex = ShoppingList.indexOf(oldValue);

    ShoppingList[oldValueIndex] = newValue;
    res.send(ShoppingList);
    console.log(value);
  })

  // Delete an item from the list
  .delete((req, res) => {
    const key = req.params.id;
    const element = ShoppingList.find((item) => item.id === key);
    const elementIndex = ShoppingList.indexOf(element);
    ShoppingList.splice(elementIndex, 1);
    res.send(ShoppingList);
  });

export default router;

// const filePath = "./data/list.txt";
//
// function getData() {
//   fs.readFile(filePath, "ascii", (error, data) => {
//     if (error) {
//       throw new Error(error);
//     }
//     ShoppingList = data.split(/\n/);
//     console.log(ShoppingList);
//   });
// }
// getData();
// fs.write(filePath, ShoppingList, (error) => {
//      throw new Error(error);
//    });
