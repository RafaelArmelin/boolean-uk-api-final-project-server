const prisma = require("../../utils/database");

async function getAllQuestions(req, res) {
  console.log("req.body: ", req.body);

  try {
    const questions = await prisma.question.findMany();

    res.json(questions);
  } catch (error) {
    console.error();

    res.status(500).json({ error: error.message });
  }
}

async function getQuestionById(req, res) {
  const id = req.params.id;
  console.log("id: ", id);

  try {
    const questionById = await prisma.question.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    res.json({ response: questionById });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

//
async function addOneQuestion(req, res) {
  const id = req.params.id;

  const { title, body } = req.body;

  try {
    // TO ADD TAGS FEATURE
    const newQuestion = await prisma.question.create({
      data: {
        title,
        body,
        userId: parseInt(id),
      },
      include: {
        tags: true,
      },
    });
    res.json(newQuestion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const deleteQuestionById = async (req, res) => {
  console.log("delete question: ", req.params);

  try {
    const reqId = req.params.id;
    console.log("params: ", req.params.id);

    await prisma.questionsOnTags.deleteMany({
      where: {
        questionId: parseInt(reqId),
      },
    });

    const deleteQuestion = await prisma.question.delete({
      where: {
        id: parseInt(reqId),
      },
    });
    res.json({ delete: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllQuestions,
  getQuestionById,
  addOneQuestion,
  deleteQuestionById,
};
