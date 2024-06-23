const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskStatusSchema = new Schema({
        title: {
            type: String,
            minlength:3,
            required:true,
        },
});

module.exports = mongoose.model('TaskStatus', TaskStatusSchema);