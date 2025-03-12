const {Tarea} = require('../models');

const createTarea = async (req, res) => {
    try {
        const {titulo, description} = req.body;
        const tarea = await Tarea.create({titulo, description});
        return res.status(200).json(tarea);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
};

const getTareas = async (req, res) => {
    try {
        const tareas = await Tarea.findAll();
        return res.status(200).json(tareas);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
};

const getTareaById = async (req, res) => {
    try {
        const {id} = req.params;
        const tarea = await Tarea.findByPk(id);
        if (tarea) {
            return res.status(200).json(tarea);
        }
        return res.status(404).json({message: "Tarea no encontrada"});
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
};

const updateTarea = async (req, res) => {
    try {
        const {id} = req.params;
        const {titulo, description, completed} = req.body;
        const tarea = await Tarea.findByPk(id);
        if(!tarea) {
            return res.status(404).json({message: "Tarea no encontrada"});
        }

        if(titulo) tarea.titulo = titulo;
        if(description) tarea.description = description;
        if(completed) tarea.completed = completed;

        await tarea.save();
        return res.status(200).json({message: "Tarea actualizada", tarea});
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
};

const deleteTarea = async (req, res) => {
    try {
        const {id} = req.params;
        const tarea = await Tarea.findByPk(id);
        if(!tarea) {
            return res.status(404).json({message: "Tarea no encontrada"});
        }

        await tarea.destroy();
        return res.status(200).json({message: "Tarea eliminada"});
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
};

module.exports = {createTarea, getTareas, getTareaById, updateTarea, deleteTarea};
