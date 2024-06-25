const Task = require('../model/Task');

const createTask = async (req, res) => {
    try {
        const { title, description, status } = req.body;
        const owner = req.user._id;
        const newTask = await Task.create({
            title,
            description,
            status,
            owner
        });

        res.status(201).send({ status: true, data: newTask });
    } catch (err) {
        res.status(500).send({ status: false, error_message: err.message });
    }
}

const getTasks = async (req, res) => {
    try {
        const owner = req.user._id;
        const tasks = await Task.find({ owner }).populate('status').populate({
            path: 'owner',
            model: 'User',
            select: 'firstname lastname _id'
        }).exec();
        return res.status(200).send({ status: true, data: tasks });

    } catch (err) {
        return res.status(500).send({ status: false, error_message: err.message });
    }
}

const updateTask = async (req, res) => {
    try {
        const updatedTask = {};
        const owner = req.user._id;
        const { id, title, description, status } = req.body;
        console.log(id);
        if (!id) {
            return res.status(404).send({ status: false, message: `Id is required to update task` });
        }

        if (title) updatedTask.title = title;
        if (description) updatedTask.description = description;
        if (status) updatedTask.title = status;
        const tasksUpdated = await Task.updateOne({ _id: id, owner: owner }, { $set: updatedTask });
        return res.status(200).send({ status: true, data: tasksUpdated });
    } catch (err) {
        return res.status(500).send({ status: false, error_message: err.message });
    }
}

module.exports = { createTask, getTasks, updateTask };