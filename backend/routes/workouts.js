const express = require("express");
const Workout = require("../models/WorkoutModel");
const router = express.Router();

//Get all workouts
router.get("/", (req, res) => {
  res.json({ mssg: "GET all workouts" });
});

//Get single workouts
router.get("/:id", (req, res) => {
  res.json({ mssg: "GET single workout" });
});

//POST single workouts
router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  res.json({ mssg: "POST single workout" });
});

//DELETE single workouts
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE single workout" });
});

//UPDATE single workouts
router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE single workout" });
});

module.exports = router;
