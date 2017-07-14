const express = require("express");
const apiRouter = express.Router();
const Activity = require("../models/Activity");

apiRouter.get("/activities", (req, res) => {
  Activity.find()
    .then(foundActivities => {
      res.json(foundActivities);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

apiRouter.post("/activities", (req, res) => {
  let newActivity = new Activity(req.body);
  newActivity
    .save()
    .then(savedActivity => {
      res.json(savedActivity);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

apiRouter.get("/activities/:id", (req, res) => {
  res.send("you are getting a single activity by id");
});

apiRouter.put("/activities/:id", (req, res) => {
  res.send("you are updating a single activity by id");
});

apiRouter.delete("/activities/:id", (req, res) => {
  res.send("you are deleting a single activity by id");
});

apiRouter.post("/activities/:id/stats", (req, res) => {
  res.send("You are adding tracked data for a given day and exercise");
});

apiRouter.delete("/stats/:id", (req, res) => {
  res.send("you are deleting a days worth of stats for a given activity");
});

module.exports = apiRouter;
