//Objeto cliente
const CLIENTE={
    nombre:"José",
    ciudad:"Bogotá",
    esRappiPrime:true,
};

console.log(`Hola ${CLIENTE.nombre} su pedido a domicilio es en ${CLIENTE.ciudad}`);

//Arreglo de pedido
let productos = ["Hamburguesa", "Papas", "Gaseosa"];
console.log(`Su pedido es: ${productos}`);

//Solo primer elemento
console.log(productos[0]);

//Se añade postre
productos.push("Postre");
console.log(`Su pedido actualizado es: ${productos}`);

//Se elimina postre
productos.pop();
console.log(`Su pedido actualizado es ${productos}`);

//Productos totales
console.log(`Su pedido tiene ${productos.length} productos`);

let pedido={
    cliente:CLIENTE,
    productos:productos,
    estado:"Va en camino"
}

//Pedido completo
console.log(pedido);

//Nombre del cliente
console.log(pedido.cliente.nombre)

//Cambio de estado en el pedido
pedido.estado="Entregado";

//Impresión final de todo el pedido
console.log(pedido);

//Impresión primer producto desde la ficha del pedido
console.log(pedido.productos[0]);

//-----------------Factura-----------------
let valorHamburguesa=15000;
let valorPapas=8000;
let valorGaseosa=5000;
const PROPINA=0.1;
let domicilio=10000;
let subtotal=valorHamburguesa+valorPapas+valorGaseosa;
//Sin propina:
//let totalAPagar=subtotal+domicilio;
// Con propina 
let totalAPagar=subtotal+domicilio+(subtotal*PROPINA);

console.log(`\n--------Factura de pedido a domicilio--------`);
console.log(`Hamburguesa: ${valorHamburguesa}`);
console.log(`Papas: ${valorPapas}`);
console.log(`Gaseosa: ${valorGaseosa}`);
console.log(`Subtotal: ${subtotal}`);
console.log(`Domicilio: ${domicilio}`);
console.log(`Propina (opcional): ${subtotal*PROPINA}`);
console.log(`El total a pagar es: ${totalAPagar}`);
console.log(`El total a pagar por el pedido de ${CLIENTE.nombre} es: ${totalAPagar}\n`);


//El valor de la propina es constante, por lo tanto, se declara como const.
//Era un string, luego un number (era el que necesitaba).

