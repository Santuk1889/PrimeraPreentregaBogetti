const posiciones = ["Arquero", "Defensor", "Volante", "Delantero"];
const equipos = ["Rosario Central", "Talleres", "Union", "River Plate"];
const jugadores = [];

// Funcion para validar indice
function validarIndice(indice, max) {
    return !isNaN(indice) && indice >= 0 && indice < max;
}

// Funcion para obtener y validar los prompt
function obtenerIndice(mensaje, max) {
    const indice = parseInt(prompt(mensaje));
    if (!validarIndice(indice, max)) {
        alert("Opción inválida.");
        return null;
    }
    return indice;
}

// Funcion para agregar un jugador
function agregarJugador() {
    const nombre = prompt("Ingrese el nombre del jugador:");
    if (!nombre) return alert("Nombre no puede estar vacío.");
    
    const mensajePosiciones = "Ingrese la posición del jugador:\n0. Arquero\n1. Defensor\n2. Volante\n3. Delantero";
    const indicePosicion = obtenerIndice(mensajePosiciones, posiciones.length);
    if (indicePosicion === null) return;
    const posicion = posiciones[indicePosicion];

    const mensajeEquipos = "Ingrese el equipo del jugador:\n0. Rosario Central\n1. Talleres\n2. Union\n3. River Plate";
    const indiceEquipo = obtenerIndice(mensajeEquipos, equipos.length);
    if (indiceEquipo === null) return;
    const equipo = equipos[indiceEquipo];

    const edad = parseInt(prompt("Ingrese la edad del jugador:"));
    if (isNaN(edad) || edad <= 0) return alert("Edad inválida.");

    jugadores.push({ nombre, posicion, equipo, edad });
    console.log("Jugador agregado exitosamente.");
}

// Funcion para ver jugadores
function verJugadores() {
    if (jugadores.length === 0) {
        console.log("No hay jugadores en la lista.");
        return;
    }

    console.log("Lista de jugadores:");
    let index = 0;
    for (const jugador of jugadores) {
        console.log(`${index}. ${jugador.nombre} - ${jugador.posicion} - ${jugador.equipo} - ${jugador.edad} años.`);
        index++;
    }
}

// Funcion para eliminar un jugador
function eliminarJugador() {
    if (jugadores.length === 0) return alert("No hay jugadores para eliminar.");

    let mensaje = "Seleccione el número del jugador a eliminar:\n";
    let index = 0;
    for (const jugador of jugadores) {
        mensaje += `${index}. ${jugador.nombre} - ${jugador.posicion} - ${jugador.equipo} - ${jugador.edad} años.\n`;
        index++;
    }

    const indice = obtenerIndice(mensaje, jugadores.length);
    if (indice === null) return;

    jugadores.splice(indice, 1);
    console.log("Jugador eliminado exitosamente.");
}

// Menu app
while (true) {
    const opcion = parseInt(prompt("> Gestión de Jugadores <\n\nElige una opción:\n1. Agregar jugador\n2. Ver jugadores\n3. Eliminar jugador\n4. Salir"));

    switch (opcion) {
        case 1:
            agregarJugador();
            break;
        case 2:
            verJugadores();
            break;
        case 3:
            eliminarJugador();
            break;
        case 4:
            console.log("App cerrada correctamente.");
            break;
        default:
            alert("Opción no válida. Intenta de nuevo.");
    }
    if (opcion === 4) {
        break;
    }
} 
