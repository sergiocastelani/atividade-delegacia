import express from "express";

const crimeRouter = express.Router()

crimeRouter.get("/crime", async (req, res) => {
    const repository = req.app.locals.repository;

    const crimes = await repository.crime.findMany();
    res.status(200).json({data: crimes});
});

crimeRouter.get("/crime/:id", async (req, res) => {
    const repository = req.app.locals.repository;

    const crime = await repository.crime.findFirst({
        where: {
          id: parseInt(req.params.id),
        }
    });

    if (!crime) return res.status(404).json();

    res.status(200).json(crime);
});

crimeRouter.post("/crime", async (req, res) => {
    const repository = req.app.locals.repository;

    const crime = req.body;
    if(!crime.descricao) 
        return res.status(400).json({message: "Descrição é obrigatória"});
    if(!crime.idCriminoso) 
        return res.status(400).json({message: "ID do criminoso é obrigatório"});

    try {
        const newCrime = await repository.crime.create({data: crime});
        return res.status(201).json({data: newCrime});
    } catch (error) {
        return res.status(500).json({message: "Erro ao criar Crime"});
    }
});

export default crimeRouter;