const getUsers = (req, res) => {
  res.json({
    version: "v2",
    users: [
      { id: 1, name: "Ram Rathod v2", email: "Ram@example.com" },
      { id: 2, name: "Shyam Sharma v2", email: "Shyam@example.com" },
    ],
  });
};

const getUserById = (req, res) => {
  res.json({
    version: "v2",
    user: {
      id: req.params.id,
      name: `User ${req.params.id} from v2`,
      email: `user${req.params.id}@example.com`,
      premium: true,
    },
  });
};

module.exports = { getUsers, getUserById };
