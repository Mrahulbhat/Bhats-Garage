const express = require("express");
const connectDB = require('./db/db.js');
const router = require('./routes/route.js');
const cors = require('cors');

const app = express();

app.use(cors());


app.use(express.json());
app.use("/api", router);

const port = 4000;
app.listen(port, async () => {
  await connectDB(); 
  console.log(`Server running on port ${port}`);
});
