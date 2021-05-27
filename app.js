const path = require ('path');
const express = require ('express');
const app = express();
const publicPath = path.resolve(__dirname, './public');

app.use(express.static(path.resolve(__dirname,"./public")));

app.set("port", process.env.PORT || 3000);

app.listen(3000, () => console.log('open server in http://localhost:3000'));


app.get("/",(req,res) => res.sendFile(path.join(__dirname, "views", "home.html")));
app.get("/ofertas",(req,res) => res.sendFile(path.join(__dirname, "views", "ofertas")));
app.get("/register",(req,res) => res.sendFile(path.join(__dirname, "views", "register.html")));
app.get("/login",(req,res) => res.sendFile(path.join(__dirname, "views", "login.html")));


