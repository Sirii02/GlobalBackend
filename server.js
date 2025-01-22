// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const cors = require("cors")
// const jwt = require("jsonwebtoken")

// app.use(express.json())
// app.use(cors())

// mongoose.connect("mongodb://localhost:27017/globalDB")
//     .then(() => (console.log("db connected")))
//     .catch(() => (console.log("db not connected")))


// const mySchema = mongoose.Schema({
//     name: String,
//     pwd: String
// })
// const user = mongoose.model("user", mySchema);


// app.post("/", (req, res) => {
//     res.json({success:true})
//     // const { name, pwd } = req.body;
//     // const skey = "siri";
//     // const token = jwt.sign(name, skey)
//     // const details = {
//     //     name: name,
//     //     pwd: token
//     // }
//     // const userdetails = new user(details)
//     // userdetails.save()
//         // .then(() => { res.json({success:true})})
//         // .catch(() => { res.send("wrong") })
// })

// app.listen(3000, () => {
//     console.log("Server started");
// })


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/globalDB")
    .then(() => (console.log("db connected")))
    .catch(() => (console.log("db not connected")))

const userSchema = new mongoose.Schema({
  name: String,
  pwd: String
});

const User = mongoose.model("user", userSchema);

app.post("/", async (req, res) => {
  const { name } = req.body;

  // try {
  //   const user = await User.findOne({ name });
    if (user) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  // } catch (error) {
  //   console.log("Error fetching user");
  // }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
