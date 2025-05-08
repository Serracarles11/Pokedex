function actualizarHora() {
    const ahora = new Date();
    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    const segundos = String(ahora.getSeconds()).padStart(2, '0');
    const horaFormateada = `${horas}:${minutos}`;
    const horaFormateada1 = `${horas}:${minutos}`;

    document.getElementById('reloj').textContent = horaFormateada;
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







parte_abajo.addEventListener('click', () => {
  console.log("Parte abajo clickeada");
  const tablet = document.getElementById('tablet');

  // Ocultar cosas
  document.querySelector('.fecha').style.display = 'none';
  document.querySelector('.reloj').style.display = 'none';
  document.querySelector('.camara').style.display = 'none';
  document.querySelector('.pokeball').style.display = 'none';

  // Mostrar los tipos
  tablet.innerHTML = `
        <div class="parte_abajo_tablet" id="parte_abajo"></div>
        <div class="parte_arriba_tablet"></div>
        <div class="volumen_1"></div>
        <div class="volumen_2"></div>
        <div class="info_1"></div>
        <div class="info_2"></div>
        <div class="pantalla_uso" id="pantalla_uso">

            <div class="grid">
                <div class="cuadro">
                    <img src="img/Icon_water.webp" alt="">
                </div>
                <div class="cuadro">
                    <img src="img/Icon_bug.webp" alt="">
                </div>
                <div class="cuadro">
                    <img src="img/Icon_fire.webp" alt="">
                </div>
                <div class="cuadro">
                    <img src="img/Icon_grass.webp" alt="">
                </div>
                <div class="cuadro">
                    <img src="img/Icon_electric.webp" alt="">
                </div>
                <div class="cuadro">
                    <img src="img/Icon_poison.webp" alt="">
                </div>
                <div class="cuadro">
                    <img src="img/Icon_psychic.webp" alt="">
                </div>
                <div class="cuadro">
                    <img src="img/Icon_rock.webp" alt="">
                </div>
                <div class="cuadro">
                    <img src="img/Icon_steel.webp" alt="">
                </div>
                <div class="cuadro">
                    <img src="img/Icon_dark.webp" alt="">
                </div>
                <div class="cuadro">
                    <img src="img/Icon_fairy.webp" alt="">
                </div>
                <div class="cuadro">
                    <img src="img/Icon_fighting.webp" alt="">
                </div>
                <div class="cuadro">
                    <img src="img/Icon_flying.webp" alt="">
                </div>
                <div class="cuadro">
                    <img src="img/Icon_ground.webp" alt="">
                </div>
                <div class="cuadro">
                    <img src="img/Icon_ice.webp" alt="">
                </div>
                <div class="cuadro">
                    <img src="img/Icon_normal.webp" alt="">
                </div>
                <div class="cuadro">
                    <img src="img/Icon_dragon.webp" alt="">
                </div>
                <div class="cuadro">
                    <img src="img/Icon_ghost.webp" alt="">
                </div>
                <div class="cuadro"></div>
                <div class="cuadro"></div>
                <div class="cuadro"></div>
                <div class="cuadro"></div>
                <div class="cuadro"></div>
                <div class="cuadro"></div>
                <div class="cuadro"></div>
                <div class="cuadro"></div>
                <div class="cuadro"></div>
                <div class="cuadro"></div>
            </div>
        </div>
  `;
});

