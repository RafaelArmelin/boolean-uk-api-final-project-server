const prisma = require("../../utils/database");

const createOne = async (req, res) => {
  const data = req.body;

  const { gitHubUserName, location } = data;

  try {
    const result = await prisma.user.create({
      data: {
        gitHubUserName,
        location,
      },
    });
    res.json({ data: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
};

module.exports = {
  createOne,
};
