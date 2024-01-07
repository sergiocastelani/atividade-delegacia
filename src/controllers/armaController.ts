import express from "express";

const armaRouter = express.Router()

armaRouter.get("/arma", async (req, res) => {
    const repository = req.app.locals.repository;

    const armas = await repository.arma.findMany();
    res.status(200).json(armas);
});

armaRouter.post("/arma", async (req, res) => {
    const repository = req.app.locals.repository;

    const arma = req.body;
    if(!arma.descricao) 
        return res.status(400).json({message: "Descrição é obrigatória"});
    if(!arma.idCrime) 
        return res.status(400).json({message: "ID do crime é obrigatório"});

    try {
        const newArma = await repository.arma.create({data: arma});
        return res.status(201).json({data: newArma});
    } catch (error) {
        return res.status(500).json({message: "Erro ao criar Arma"});
    }


});

export default armaRouter