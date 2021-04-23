import express from "express";
 

import "./database";
import { routes } from "./routes";

const app = express();

app.use(express.json());

app.use(routes);


app.listen(8081, () =>  console.log('servidor rodando na porta localhost:8081'));