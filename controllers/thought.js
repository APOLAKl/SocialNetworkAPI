const router = require("express").Router();

const { Thought } = require('../models');


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
  .then(results => {
    res.json(results)
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

module.exports = router