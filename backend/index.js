const express = require("express"); // imports express to run html server
const cors = require("cors"); // imports allow calling server from any origin

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => { // post request to authenticate
  const { username } = req.body;
  return res.json({ username: username, secret: "sha256..." }); // returns a fake user and password
});

app.listen(3001); // port to run the server on