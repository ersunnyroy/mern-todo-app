const Task = require('../model/Task');

const createTask = async (req, res) => {
    try {
        const { title, description, status } = req.body;
        const owner = req.user._id;
        console.log(owner);
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
            path:'owner',
            model:'User',
            select:'firstname lastname _id'
        }).exec();
        res.status(200).send({ status: true, data: tasks });

    } catch (err) {
        res.status(500).send({ status: false, error_message: err.message });
    }
}

module.exports = { createTask, getTasks };