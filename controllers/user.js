const router = require("express").Router();

const { User } = require('../models');


router.get("/", (req, res) => {
    User.find({})
    .populate("thoughts")
    .populate("friends")
    .then(results => {
      res.json(results)
    })
})

router.get("/:id", (req, res) => {
    User.findById(req.params.id)
    .then(results => {
      res.json(results)
    })
})

router.post("/", (req, res) => {
  User.create(req.body)
  .then(results => {
    res.json(results)
  })
})

router.put("/:id", (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
  .then(results => {
    res.json(results)
  })
})

router.delete("/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id)
  .then(results => {
    res.json(results)
  })
})

router.post("/:userId/friends/:friendId", (req, res) => {
  User.findByIdAndUpdate(req.params.userId, {
    $push: {
      friends: req.params.friendId
    }
  })
  .then(results => {
    res.json(results)
  })
})

router.delete("/:userId/friends/:friendId", (req, res) => {
  User.findByIdAndUpdate(req.params.userId, {
    $pull: {
      friends: req.params.friendId
    }
  })
  .then(results => {
    res.json(results)
  })
})

module.exports = router
