import express from "express";
import routes from "./router/router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(5051, () => {
  console.log("Server runnning on PORT 5051");
});
