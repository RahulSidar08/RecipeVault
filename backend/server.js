const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const connectDb = require("./config/connectionDb");
const cors = require("cors");

const PORT = process.env.PORT || 3000;
connectDb();

app.use(express.json());
const corsOptions = {
  origin: "https://recipe-vault-navy.vercel.app",
  credentials: true, // if using cookies or auth headers
};
app.use(cors(corsOptions));
app.use(express.static("public"));

app.use("/", require("./routes/user"));
app.use("/recipe", require("./routes/recipe"));

app.listen(PORT, (err) => {
  console.log(`app is listening on port ${PORT}`);
});
