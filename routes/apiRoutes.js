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
  Activity.findOne({ _id: req.params.id }).then(statToUpdate => {
    var statToUpdate = {
      activity: statToUpdate.activity,
      stat: {
        date: req.body.date,
        value: req.body.value
      }
    };
    Stat.updateOne({ _id: req.params.id }, statToUpdate);
    res.send({ statToUpdate });
  });
});

// apiRouter.post("/activities/:id/stats", (req, res) => {
//   Activity.findById({ _id: req.params.id }).then(foundActivity => {
//     foundActivity.statistics.push(req.body);
//     foundActivity
//       .save()
//       .then(result => {
//         res.json(result);
//       })
//       .catch(err => {
//         res.status(500).send(err);
//       });
//   });
// });

//   let activityData = req.body;
//   let newActivity = new Activity(activityData);
//   newActivity
//     .save()
//     .then(savedActivity => {
//       res.send(savedActivity);
//     })
//     .catch(err => {
//       res.status(500).send(err);
//     });
// });

apiRouter.delete("/stats/:id", (req, res) => {
  res.send("you are deleting a days worth of stats for a given activity");
});

module.exports = apiRouter;
