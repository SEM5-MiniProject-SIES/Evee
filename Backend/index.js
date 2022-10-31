const connectToMongo = require("./db");
const express = require("express");
const jwt = require('jsonwebtoken');
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs')
const User = require("./models/User");

const SECRET_SIGN = "EveeIsTheBestMiniProjectEver";
const cors=require("cors");

const corsOptions ={
   origin:'*', 
   credentials:true,
   optionSuccessStatus:200,
}


connectToMongo();

const app = express();
const port = 5000;
app.use(express.json());
app.use(cors(corsOptions))


app.get("/", (req, res) => {
  res.send("Hello aman!");
});

app.get("/login", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.post(
  "/signup",
  [
    body("name").isLength({ min: 3 }),
    body("email").isEmail(),
    body("password").isLength({ min: 5 }),
    body("number").isLength({ min: 10, max: 10 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.json({
          error: "A person with the same email already exists",
        });
      }
      const salt = await bcrypt.genSalt(10);
      const passHas = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: passHas,
        number: req.body.number,
      });
      const data = {
        user:{
          id:user.id
        }
      }
      const token = jwt.sign(data, SECRET_SIGN);
      res.json({token});
    } catch (error) {
      console.error(error.message)
      res.send("Some error occured")
    }
  }
);

app.post('/login',async (req,res)=>{
  try {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({email:email}, (err, user)=>{
      if (err) {
        console.log(err.message);
      }else{
        if(user){
          bcrypt.compare(password, user.password).then((valid)=>{
            if(valid){
              const data = user.id;
              const token = jwt.sign(data, SECRET_SIGN);
              res.status(200).json({token})
            }else{
              res.json({error:"Email or Password incorrect"});
            }
          })
        }else{
          res.json({error:"Email or Password incorrect"});
        }
      }
    });
  } catch (error) {
    res.send("some error occured");
    console.log(error.message);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
