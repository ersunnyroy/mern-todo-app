const TaskStatus = require('../model/TaskStatus');

const createTaskStatus = async (req, res) => {
    try {
        const { title } = req.body;

        const newTaskStatus = await TaskStatus.create({
            title
        });

        res.status(201).send({ status: true, data: newTaskStatus });
    } catch (err) {
        res.status(500).send({ status: false, error_message: err.message });
    }
}

module.exports = { createTaskStatus };