const router = require("express").Router();

const { Thought, User } = require('../models');


router.get("/", (req, res) => {
    Thought.find({})
    .then(results => {
      res.json(results)
    })
})

router.get("/:id", (req, res) => {
    Thought.findById(req.params.id)
    .then(results => {
      res.json(results)
    })
})

router.post("/", (req, res) => {
  Thought.create(req.body)
  .then(createdThought => {

    User.findByIdAndUpdate(req.body.userId, {
      $push: {
        thoughts: createdThought._id
      }
    })
    .then(results => {
      res.json(results)
    })

  })
})

router.put("/:id", (req, res) => {
  Thought.findByIdAndUpdate(req.params.id, req.body)
  .then(results => {
    res.json(results)
  })
})

router.delete("/:id", (req, res) => {
  Thought.findByIdAndDelete(req.params.id)
  .then(results => {
    res.json(results)
  })
})

// add reaction
router.post("/:thoughtId/reactions", (req, res) => {
  Thought.findByIdAndUpdate(req.params.thoughtId, {
    $push: {
      reactions: req.body
    }
  })
  .then(results => {
    res.json(results)
  })
})

router.delete("/:thoughtId/reactions/:reactionsId", (req, res) => {
  Thought.findByIdAndUpdate(req.params.thoughtId, {
    $pull: {
      reactions: {
        reactionId: req.params.reactionsId
      }
    }
  })
  .then(results => {
    res.json(results)
  })
})

module.exports = router