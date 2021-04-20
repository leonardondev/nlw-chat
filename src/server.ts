import express from "express";
import { routes } from "./routes";

import createConnection from './database';
createConnection();

const app = express();
app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log("Server is running on http://localhost:3333"));
