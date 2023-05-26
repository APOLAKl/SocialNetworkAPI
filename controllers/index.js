const router = require("express").Router();

const userRoutes = require('./user.js');
const thoughtRoutes = require('./thought.js');


router.use("/api/users", userRoutes);
router.use("/api/thoughts", thoughtRoutes);


module.exports = router;