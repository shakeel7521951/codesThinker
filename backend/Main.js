const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path"); 
require('dotenv').config();
const cookieParser = require("cookie-parser")


require("./Conn/Connection");
const routes = require('./Api_routes/routes');
const staffRoutes = require('./Api_routes/staff_routes');
const authRoutes = require('./Api_routes/authRoutes');
app.use(cookieParser())

const port = process.env.PORT || 6005;

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,              
}));

app.use(express.urlencoded({ extended: false }));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/staffImages',express.static(path.join(__dirname,'staffImages')))

app.use('/', routes);
app.use('/staff',staffRoutes);
app.use('/auth',authRoutes);

app.listen(port, () => {
    console.log(`Running at port no. ${port}`);
});
