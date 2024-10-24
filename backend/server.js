require("dotenv").config();
const express = require("express");

//express app
const app = express();
const workoutRoutes = require('./routes/workouts')

//middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use('/api/workouts', workoutRoutes)

//listen for requests
app.listen(process.env.PORT, () => {
  console.log("listening on port 4000");
});
