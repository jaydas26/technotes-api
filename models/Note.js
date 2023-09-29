const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const noteSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        title: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
        completed: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);

noteSchema.plugin(AutoIncrement, {
    inc_field: 'ticket', // This is the field that will be auto-incremented.
    id: 'ticketNums', // Identifier for the auto-incremented counter.
    start_seq: 500, // The initial value for the auto-incremented field.
});

module.exports = mongoose.model('Note', noteSchema);
