const path = require ('path');
const express = require ('express');
const app = express();
const publicPath = path.resolve(__dirname, './public');

app.use(express.static(path.resolve(__dirname,"./public")));

app.listen(3000, () => console.log('open server in http://localhost:3000'));

app.get("/",(req,res) => res.sendFile(path.join(__dirname, "views", "home.html")));
app.get("/ofertas",(req,res) => res.sendFile(path.join(__dirname, "views", "ofertas")));
app.get("/register",(req,res) => res.sendFile(path.join(__dirname, "views", "register.html")));
app.get("/login",(req,res) => res.sendFile(path.join(__dirname, "views", "login.html")));


function CrearArticulos (foto, descripcion, precio, descuesto, oferta){
   
    this.foto = 'foto';
    this.descripcion = descripcion;
    this.precio = 'precio';
    this.descuento = 'descuento';
    this.oferta = 'oferta';
}

let articulo1 = new CrearArticulos ('img-cafetera-moulonex.jpg','Cafetera Moulinex',6770,'40%', true);

let articulo2 = new CrearArticulos ('img-macbook-pro-2019.jpg','MacBokk Pro 2019',230000,'20%', true);

let articulo3 = new CrearArticulos ('img-tv-samsung-smart.jpg','SmartTV Sansung 43"',70500,'10%', false);

let articulo4 = new CrearArticulos ('img-samsung-galaxy-s10.jpg','Sansung Galaxy S10',23200,'5%', true);

