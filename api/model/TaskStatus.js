const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskStatusSchema = new Schema({
        title: {
            type: String,
            enum: ['To Do', 'In Progress', 'Completed'],
            unique: true,
            required: true,
        },
});

module.exports = mongoose.model('TaskStatus', TaskStatusSchema);