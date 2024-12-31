const express = require("express");
const connectDB = require('./db/db.js');
const router = require('./routes/route.js');

const app = express();

app.use(express.json());
app.use("/api", router);

const port = 5000;
app.listen(port, async () => {
  await connectDB(); 
  console.log(`Server running on port ${port}`);
});
