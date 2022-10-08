const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const usersRoute = require("./routes/usersRoute");

app.use("/users/", usersRoute);

app.listen(PORT, () => {
  console.log(`Server on : http://localhost:${PORT}/`);
});
