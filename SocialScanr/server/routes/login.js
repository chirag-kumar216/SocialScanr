const router = require("express").Router();
const User = require("../models/user");
const validateLogin = require("../models/loginValidate"); // Import the validation function
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  try {
    const data = req.body; // Get the data from the request body

    const { error } = validateLogin(data); // Pass the data to the validation function
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    const user = await User.findOne({ email: data.email });
    if (!user)
      return res.status(401).send({ message: "Invalid Email or Password" });

    const validPassword = await bcrypt.compare(data.password, user.password);
    if (!validPassword)
      return res.status(401).send({ message: "Invalid Email or Password" });

    // Generate and send a JWT token for successful login
    res.status(200).send({ message: "Logged in successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
