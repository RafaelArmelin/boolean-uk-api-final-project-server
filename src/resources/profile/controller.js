const { profile } = require("../../utils/database");
const prisma = require("../../utils/database");

const createOne = async (req, res) => {
  const data = req.body;

  const { gitHubUserName, location } = data;

  try {
    const result = await prisma.profile.create({
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

const updateOneById = async (req, res) => {
  const profileToUpdate = {
    id: req.params.id,
    ...req.body,
  };
  const { gitHubUserName, location } = profileToUpdate;

  try {
    const result = await prisma.profile.update({
      where: {
        id: req.params.parseInt(id),
      },
      data: {
        gitHubUserName: req.params.body,
        location: req.params.body,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
};

module.exports = {
  createOne,
  updateOneById,
};
