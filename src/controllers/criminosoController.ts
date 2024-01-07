import express from "express";

const criminosoRouter = express.Router()

criminosoRouter.get("/criminoso", async (req, res) => {
    const repository = req.app.locals.repository;

    const criminosos = await repository.criminoso.findMany();
    res.status(200).json({ data: criminosos });
});

criminosoRouter.get("/criminoso/:id", async (req, res) => {
    const repository = req.app.locals.repository;

    const criminoso = await repository.criminoso.findFirst({
        where: {
          id: parseInt(req.params.id),
        }
    });
    if (!criminoso) return res.status(404).json();
    
    res.status(200).json({data: criminoso});
});

criminosoRouter.post("/criminoso", async (req, res) => {
    const repository = req.app.locals.repository;

    const criminoso = req.body;
    if(!criminoso.nome) 
        return res.status(400).json({message: "Nome do criminoso é obrigatório"});

    try {
        const newCriminoso = await repository.criminoso.create({data: criminoso});
        return res.status(201).json({data: newCriminoso});
    } catch (error) {
        return res.status(500).json({message: "Erro ao criar Criminoso"});
    }

});


export default criminosoRouter