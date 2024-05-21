import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();


const getAgent = async (req, res)=>{
    let id = Number(req.params.id)
    prisma.agent
    .findUnique({
        where: {
            id:id,
        },
    })
    .then((agent) => {
        res.json(agent)
    })
    .catch((error) => {
        res.json(error)
    })
}


const getAgents = async (req, res )=>{
    prisma.agent
    .findMany()
    .then((agents) => {
        res.json(agents)
    })
    .catch((error) => {
        res.json(error)
    })
}

const createAgent = async (req, res) =>{
    console.log(req.body);
    prisma.agent
    .create({
        data: {
            name: req.body.name,
        },
    })
    .then((agent) => {
        res.json(agent)
    })
    .catch((error) => {
        res.json(error)
    })
}

const updateAgent = async (req, res) =>{
    let id = Number(req.params.id)
    let agent = req.body

    prisma.agent
    .update({
        where: {
            id: id,
        },
        data: {
            name: agent.name
        }
    })
    .then((agent) => {
        res.json(agent)
    })
    .catch((error) => {
        res.json(error)
    })
}

const deleteAgent = async (req, res) =>{
    let id = Number(req.params.id)

    prisma.agent
    .delete({
        where: {
            id: id,
        },
    })
    .then((agent) => {
        res.json(agent)
    })
    .catch((error) => {
        res.json(error)
    })
}

export {getAgent, getAgents, createAgent, updateAgent, deleteAgent}