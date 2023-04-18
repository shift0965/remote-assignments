import express from "express";
import accountRouter from "./routes/account.js";

const app = express();
app.use(express.json());
app.use("/account", accountRouter);

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
