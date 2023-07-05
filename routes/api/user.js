const express = require('express');
const router = express.Router();
const Employee = require("../../models/userModel");

router.get('/', async (req, res) => {
    try {
      const user = await Employee.findAll();
      res.json(user);

    } catch (err) {
      console.log(err);
      res.json();
    }
  }
);

router.post('/', async (req, res) => {
  try{
    const userData = req.body;
    const user = Employee.bulkCreate(userData);
    res.json(user);

  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Server error');
  }
});

module.exports = router;
