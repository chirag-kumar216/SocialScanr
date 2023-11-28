// require("dotenv").config();
// const express = require("express");
// const app = express();
// const cors = require("cors");
// const mongoose = require("mongoose");
// const connection = require("./db");
// const userRoutes = require("./routes/users");
// const authRoutes = require("./routes/auth");
// const loginRoute = require("./routes/login");
// const UserModal = require("./models/user");
// const bcrypt =require("bcrypt")
// // database connection
// // connection();

// // middlewares
// // app.use(express.json());
// // app.use(cors());

// // // routes
// // app.use("/api/users", userRoutes);
// // app.use("/api/auth", authRoutes);

// // app.use("/api/login", loginRoute);
// // app.get("/test", (req, res) => {
// //     res.send("Server is working.");
// //   });

// app.use(express.json());
// app.use(
//   cors({
//     origin: ["http://localhost:3000"],
//     methods: ["GET", "POST"],
//     credentials: true,
//   })
// );

// // "mongodb+srv://rahuljainrj2104:rj210402@clusterrj.gymocwi.mongodb.net/TaskTrove?retryWrites=true&w=majorityv";
// const databaseurl ="mongodb+srv://ck:chiragkumar@auth.6xvivjh.mongodb.net/Login?retryWrites=true&w=majority"

// mongoose.connect(databaseurl);
// app.listen(3001, () => {
//   console.log("Server is running");
// });

// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send({ message: 'Internal Server Error', error: err.message });
//   });


// const port = process.env.PORT || 3001;
// app.listen(port, console.log(`Listening on port ${port}...`));

// app.post("/register", async (req, res) => {
//     const { FirstName, LastName, Email, Password } = req.body;
//     console.log(req.body);
//     UserModal.findOne({ Email: Email }).then((user) => {
//       if (user) {
//         return res.json({
//           Status: "oldUser",
//         });
//       } else {
//         bcrypt
//           .hash(Password, 10)
//           .then((hash) => {
//             UserModel.create({ FirstName, LastName, Email, Password: hash })
//               .then((Users) => res.json(Users))
//               .catch((err) => res.json(err));
//           })
//           .catch((err) => res.json(err));
//       }
//     });
//   });

//   app.post("/login", async (req, res) => {
//     const { Email, Password } = req.body;

//     try {
//       let user = await UserModal.findOne({ Email: Email });
//     console.log({user})
//       if (!user) {
//         user = await CompanyModal.findOne({ Email: Email });
//         if (user) {
//           bcrypt.compare(Password, user.Password, (err, response) => {
//             if (response) {
//               return res.json({
//                 Status: "Success",
//                 u_type: "company",
//                 Name: user.FirstName,
//                 Email: user.Email,
//               });
//             } else {
//               return res.json("The password is incorrect");
//             }
//           });
//         } else {
//           return res.json("No such user exists");
//         }
//       } else {
//         bcrypt.compare(Password, user.Password, (err, response) => {
//           if (response) {
//             return res.json({
//               Status: "Success",
//               u_type: "user",
//               Name: user.FirstName,
//               Email: user.Email,
//             });
//           } else {
//             return res.json("The password is incorrect");
//           }
//         });
//       }
//     } catch (error) {
//       return res.status(500).json("Internal server error");
//     }
//   });


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const path = require("path");
const UserModal = require("./models/user");
const Feedback = require("./models/feedback");

const app = express();
app.use(express.json());
app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
        credentials: true,
    })
);

// "mongodb+srv://rahuljainrj2104:rj210402@clusterrj.gymocwi.mongodb.net/TaskTrove?retryWrites=true&w=majorityv";
const databaseurl = "mongodb+srv://ck:chiragkumar@auth.6xvivjh.mongodb.net/Login?retryWrites=true&w=majority";

mongoose.connect(databaseurl);

const port = process.env.PORT || 3001; // Define the port number

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.post("/register", async (req, res) => {
    const { FirstName, LastName, Email, Password } = req.body;

    try {
        const user = await UserModal.findOne({ Email: Email });
        if (user) {
            return res.json({
                Status: "oldUser",
            });
        }

        const hashedPassword = await bcrypt.hash(Password, 10);
        const newUser = await UserModal.create({ FirstName, LastName, Email, Password: hashedPassword });

        return res.json(newUser);
    } catch (error) {
        return res.status(500).json("Internal server error");
    }
});



app.post("/login", async (req, res) => {
    const { Email, Password } = req.body;

    try {
        let user = await UserModal.findOne({ Email: Email });
        if (user) {
            const isPasswordValid = await bcrypt.compare(Password, user.Password);
            if (isPasswordValid) {
                return res.json({
                    Status: "Success",
                    u_type: "user",
                    Name: user.FirstName,
                    Email: user.Email,
                });
            } else {
                return res.json("The password is incorrect");
            }
        } else {
            return res.json("No such user exists");
        }
    } catch (error) {
        return res.status(500).json("Internal server error");
    }
});


app.post("/api/feedback", async (req, res) => {
    try {
      const { email, feedback } = req.body;
  
      if (!email || !feedback) {
        return res.status(400).json({ error: "Email and feedback are required." });
      }
  
      const newFeedback = new Feedback({ email, feedback });
      await newFeedback.save();
  
      res.status(201).json({ message: "Feedback submitted successfully." });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "An error occurred while submitting feedback." });
    }
  });




  