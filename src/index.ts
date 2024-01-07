import express from "express";
import cors from 'cors';
import  { PrismaClient } from "@prisma/client"
import criminosoRouter from "./controllers/criminosoController";
import crimeRouter from "./controllers/crimeController";
import armaRouter from "./controllers/armaController";

const app = express();
app.use(express.json());
app.use(cors());

app.use(criminosoRouter);
app.use(crimeRouter);
app.use(armaRouter);

app.locals.repository = new PrismaClient();

app.listen(3000, () => {
    console.log("A API está rodando na porta http://localhost:3000 !");
});