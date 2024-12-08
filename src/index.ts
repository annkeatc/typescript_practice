import express from "express";
import { routes } from "./routes";

const app = express();
const port = 3000;

//app.use("/api/v1/users", UserRoute);

app.use("/",routes);

app.listen(port, () => {
  console.log("🚀 ~ app.listen ~ port:", port);
});
