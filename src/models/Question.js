
const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  content: { type: String, required: true },
  options: [{ type: String, required: true }],
  correctAnswer: { type: Number, required: true },
  explanation: { type: String, required: true },
  category: { 
    type: String, 
    required: true, 
    enum: ['Digital Logic', 'Computer Architecture', 'Operating Systems', 'Computer Networks', 'Algorithms', 'Data Structures', 'Software Engineering', 'Database Systems', 'Cybersecurity', 'Embedded Systems']
  },
  difficulty: { type: String, required: true, enum: ['Easy', 'Medium', 'Hard'] }
});

module.exports = mongoose.model('Question', QuestionSchema);