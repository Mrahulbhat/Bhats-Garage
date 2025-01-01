const dotenv = require('dotenv');
dotenv.config();
const express = require("express");
const connectDB = require('./db/db.js');
const router = require('./routes/route.js');
const cors = require('cors');

const app = express();

app.use(cors());


app.use(express.json());
app.use("/api", router);

const port = process.env.PORT;
app.listen(port, async () => {
  await connectDB(); 
  console.log(`Server running on port ${port}`);
});
