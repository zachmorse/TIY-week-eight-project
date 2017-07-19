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
  Activity.findById(req.params.id)
    .then(foundActivity => {
      res.json(foundActivity);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

apiRouter.put("/activities/:id", (req, res) => {
  Activity.updateOne({ _id: req.params.id }, req.body)
    .then(updatedActivity => {
      res.send(updatedActivity);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

apiRouter.delete("/activities/:id", (req, res) => {
  Activity.deleteOne({ _id: req.params.id })
    .then(() => {
      res.send("Deleted Record");
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

//{ "datePerformed": "2017/05/25", "volume": 10}

apiRouter.post("/activities/:id/stats", (req, res) => {
  Activity.findByIdAndUpdate(
    { _id: req.params.id },
    { $push: req.body },
    { upsert: true }
  ).then(updatedStat => {
    updatedStat
      .save()
      .then(newestStat => {
        res.send(newestStat);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  });
});

apiRouter.delete("/activities/:activityid/stats/:id", (req, res) => {
  Activity.findByIdAndUpdate(req.params.activityid, {
    $pull: { statistics: { _id: req.params.id } }
  })
    .then(deletedRecord => {
      res.send("deleted activity record.");
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

module.exports = apiRouter;
