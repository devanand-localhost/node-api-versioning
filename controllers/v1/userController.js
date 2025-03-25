const getUsers = (req, res) => {
  res.json({
    version: "v1",
    users: [
      { id: 1, name: "Ram Rathod v1" },
      { id: 2, name: "Shyam Sharma v1" },
    ],
  });
};

const getUserById = (req, res) => {
  res.json({
    version: "v1",
    user: { id: req.params.id, name: `User ${req.params.id} from v1` },
  });
};

module.exports = { getUsers, getUserById };
