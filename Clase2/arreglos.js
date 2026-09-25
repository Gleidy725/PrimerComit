const inventario = ["Espada", "Poción", "Mapa"];

console.log(inventario);
console.log(inventario[0]);
console.log(inventario[2]);
console.log(inventario.length);

//Añade un valor al final del arreglo
inventario.push("Llave");
console.log(inventario);

//Elimina el último valor del arreglo
inventario.pop();
console.log(inventario);

//Cambia el valor de un elemento en una posición específica del arreglo
inventario[1] = "Escudo";
console.log(inventario);
