import express, {Express, Request, Response} from "express";
import routes from "./routes";
import { database } from "./database/database";

const app = express();
const port = 3000;

const db = new database
db.dbConnect()

app.use(express.json());
app.use(routes);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});