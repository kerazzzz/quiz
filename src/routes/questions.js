
router.get('/', async (req, res) => {
    try {
      const { category, difficulty } = req.query;
      let filter = {};
      if (category) filter.category = category;
      if (difficulty) filter.difficulty = difficulty;
      const questions = await Question.find(filter);
      res.json(questions);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  router.post('/', async (req, res) => {
    try {
      const newQuestion = new Question(req.body);
      const savedQuestion = await newQuestion.save();
      res.status(201).json(savedQuestion);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  module.exports = router;