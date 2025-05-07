function actualizarHora() {
    const ahora = new Date();
    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    const segundos = String(ahora.getSeconds()).padStart(2, '0');
    const horaFormateada = `${horas}:${minutos}`;
    document.getElementById('reloj').textContent = horaFormateada;
    console.log(reloj);
}

setInterval(actualizarHora, 1000);

actualizarHora();


function mostrarFechaFormateada() {
    const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
                   'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

    const hoy = new Date();
    const diaSemana = diasSemana[hoy.getDay()];
    const numeroMes = hoy.getDate();
    const mesNombre = meses[hoy.getMonth()];

    const fechaFormateada = `${diaSemana}, ${numeroMes} de ${mesNombre}`;
    document.getElementById('fecha').textContent = fechaFormateada;
  }

  mostrarFechaFormateada();