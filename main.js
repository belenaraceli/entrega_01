
// Array para almacenar el historial de simulaciones
let historialSimulaciones = [];

// Función para calcular el monto de las cuotas
function calcularCuotas(monto, tasaInteres, plazo) {
    let tasaMensual = tasaInteres / 12 / 100;
    let cuota = (monto * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -plazo));
    console.log(`Cuota calculada: $${cuota.toFixed(2)}`);
    return cuota;
}

// Función para procesar los datos del préstamo
function simularPrestamo() {
    let monto = parseFloat(prompt("Ingrese el monto del préstamo (en $):"));
    let tasaInteres = parseFloat(prompt("Ingrese la tasa de interés anual (en %):"));
    let plazo = parseInt(prompt("Ingrese el plazo en meses:"));

    if (isNaN(monto) || isNaN(tasaInteres) || isNaN(plazo) || monto <= 0 || tasaInteres <= 0 || plazo <= 0) {
        alert("Datos inválidos. Por favor ingrese valores numéricos positivos.");
        console.log("Datos inválidos ingresados.");
        return;
    }

    let cuota = calcularCuotas(monto, tasaInteres, plazo);
    let totalPagado = cuota * plazo;
    let interesPagado = totalPagado - monto;

    // Guardar la simulación en el historial
    historialSimulaciones.push({ monto, tasaInteres, plazo, cuota, totalPagado, interesPagado });

    console.log(`Monto solicitado: $${monto.toFixed(2)}`);
    console.log(`Tasa de interés anual: ${tasaInteres}%`);
    console.log(`Plazo: ${plazo} meses`);
    console.log(`Cuota mensual: $${cuota.toFixed(2)}`);
    console.log(`Total pagado: $${totalPagado.toFixed(2)}`);
    console.log(`Interés total pagado: $${interesPagado.toFixed(2)}`);

    alert(
        `Resumen del préstamo:\n` +
        `- Monto solicitado: $${monto.toFixed(2)}\n` +
        `- Tasa de interés anual: ${tasaInteres}%\n` +
        `- Plazo: ${plazo} meses\n` +
        `- Cuota mensual: $${cuota.toFixed(2)}\n` +
        `- Total pagado: $${totalPagado.toFixed(2)}\n` +
        `- Interés total pagado: $${interesPagado.toFixed(2)}`
    );
}

// Función principal para mostrar el menú
function mostrarMenu() {
    let opcion;
    do {
        opcion = prompt(
            "Seleccione una opción:\n" +
            "1. Simular un préstamo\n" +
            "2. Ver historial de simulaciones\n" +
            "3. Salir"
        );

        switch (opcion) {
            case "1":
                simularPrestamo();
                break;
            case "2":
                verHistorial();
                break;
            case "3":
                alert("Gracias por usar el Simulador de Préstamos. ¡Adiós!");
                console.log("Usuario salió del simulador.");
                break;
            default:
                alert("Opción inválida. Intente nuevamente.");
                console.log("Opción inválida seleccionada.");
        }
    } while (opcion !== "3");
}

// Función para ver el historial de simulaciones
function verHistorial() {
    if (historialSimulaciones.length === 0) {
        alert("No hay simulaciones registradas aún.");
        console.log("Historial vacío.");
        return;
    }

    let mensaje = "Historial de Simulaciones:\n";
    historialSimulaciones.forEach((simulacion, index) => {
        mensaje += `Simulación ${index + 1}:\n` +
                   `- Monto: $${simulacion.monto.toFixed(2)}\n` +
                   `- Tasa de interés: ${simulacion.tasaInteres}%\n` +
                   `- Plazo: ${simulacion.plazo} meses\n` +
                   `- Cuota mensual: $${simulacion.cuota.toFixed(2)}\n` +
                   `- Total pagado: $${simulacion.totalPagado.toFixed(2)}\n` +
                   `- Interés pagado: $${simulacion.interesPagado.toFixed(2)}\n\n`;
    });

    alert(mensaje);
    console.log(mensaje);
}

// Invocar la función principal para iniciar el simulador
mostrarMenu();
