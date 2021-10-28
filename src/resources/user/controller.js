const prisma = require("../../utils/database");

const createOne = async (req, res) => {
  const data = req.body;

  const { userName } = data;
  console.log("userName--> ", userName);

  try {
    const result = await prisma.user.create({
      data: {
        userName,
      },
    });
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
};

const getAllUsers = async (req, res) => {
  console.log("req.body: ", req.body);

  try {
    const result = await prisma.user.findMany();

    res.json({ users: result });
  } catch (error) {
    console.error(error);

    res.status(500).json({ error: error });
  }
};

module.exports = {
  createOne,
  getAllUsers,
};
