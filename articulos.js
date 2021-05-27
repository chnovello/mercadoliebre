//Articulos

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

console.log(articulo1);
console.log(articulo2);
console.log(articulo3);
console.log(articulo4);



