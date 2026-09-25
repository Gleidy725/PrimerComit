//Ejemplo creación de perfil con un objeto
let jugador={
    nombre:"Leidy",
    nivel:23,
    vidas:3,
    tieneLlave:false,
    compañero:null,
    inventario:["Espada", "Pocion"],
};

console.log(jugador.nombre);

jugador.tieneLlave=true;
jugador.vidas=jugador.vidas-1;
jugador.monedas=50;
console.log(jugador);

console.log(jugador.inventario[0]);
jugador.inventario.push("Mapa");
console.log(` ${jugador.nombre} tiene ${jugador.inventario.length} objetos`);

console.log(jugador.puntos);
console.log(jugador.compañero);