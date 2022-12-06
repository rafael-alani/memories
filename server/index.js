import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://rafael:test@cluster0.ou2zfqx.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Server running on port: ${PORT}`))
  .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);
