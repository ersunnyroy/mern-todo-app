const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
        title: {
            type: String,
            minlength:3,
            required:true,
        },
        description: {
            type: String,
            required: false,
            default: null
        },
        status: {
            type: Schema.Types.ObjectId,
            ref: 'TaskStatus'
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
       
});

module.exports = mongoose.model('Task', TaskSchema);