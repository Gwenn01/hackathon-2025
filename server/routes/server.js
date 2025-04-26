// routes
const route = require("express").Router();
const dbCon = require("./connection");
// api query from database
const getCourse = require("./get_course");
const getFaculty = require("./get_faculty");
const getCurriculum = require("./get_curriculum");
const getFacilities = require("./get_facilities");

// api testing
route.get("/", (req, res) => {
  res.json("Testing API From Backend to Frontend");
});
// api for fetching course
route.get("/course", async (req, res) => {
  try {
    const resultCourse = await getCourse();
    res.status(200).json(resultCourse);
  } catch (error) {
    res.status(500).json({
      error: "An error occurred while fetching data",
      details: error.message,
    });
  }
});
// api for fetching faculty
route.get("/faculty", async (req, res) => {
  try {
    const result = await getFaculty();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      error: "An error occurred while fetching data",
      details: error.message,
    });
  }
});
// api for fetching curriculum
route.get("/curriculum", async (req, res) => {
  try {
    const result = await getCurriculum();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      error: "An error occurred while fetching data",
      details: error.message,
    });
  }
});
// api for fetching facilities
route.get("/facilities", async (req, res) => {
  try {
    const result = await getFacilities();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      error: "An error occurred while fetching data",
      details: error.message,
    });
  }
});
module.exports = route;
