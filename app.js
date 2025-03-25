const express = require("express");
const cors = require("cors");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Route imports
const v1Routes = require("./routes/v1/index");
const v2Routes = require("./routes/v2/index");

// URL Path Versioning
app.use("/v1", v1Routes);
app.use("/v2", v2Routes);

// Header Versioning
app.use((req, res, next) => {
  const acceptHeader = req.get("Accept");
  const versionMatch = acceptHeader && acceptHeader.match(/version=(\d+)/);

  if (versionMatch) {
    const version = versionMatch[1];
    if (version === "1") return v1Routes(req, res, next);
    if (version === "2") return v2Routes(req, res, next);
  }

  next();
});

// Query Parameter Versioning
app.use((req, res, next) => {
  const version = req.query.version;
  if (version === "1") return v1Routes(req, res, next);
  if (version === "2") return v2Routes(req, res, next);
  next();
});

// Default route
app.get("/", (req, res) => {
  res.send("API Versioning Demo - Use /v1, /v2, or version headers/query");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
