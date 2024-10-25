const express = require("express");
const router = express.Router();
const {
    createWorkout,
    getWorkouts,
    getWorkout
} = require('../controllers/workoutController')

//Get all workouts
router.get("/", getWorkouts);

//Get single workouts
router.get("/:id", getWorkout);

//POST single workouts
router.post("/", createWorkout);

//DELETE single workouts
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE single workout" });
});

//UPDATE single workouts
router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE single workout" });
});

module.exports = router;
