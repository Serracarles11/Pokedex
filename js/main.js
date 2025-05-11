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
    <div class="volumen_1"></div>
    <div class="volumen_2"></div>
    <div class="info_1"></div>
    <div class="info_2"></div>
    <div class="parte_abajo_tablet" id="parte_abajo"></div>
    <div class="parte_arriba_tablet"></div>
    <div class="anterior"></div>
    <div class="siguiente_pokemon">
    <img src="img/flecha-hacia-arriba.png" alt="" id="siguiente">
    </div>
    <div class="anterior_pokemon">
        <img src="img/flecha-hacia-arriba.png" class="img_izquierda" alt="" id="anterior">
    </div>

    <div class="grid_caracteristicas_tablet">
        <div class="caracteristicas_tablet agua">
            <img src="${data.imagen}" class="img_mega2" id="todo_tipos">
        </div>
        <div class="caracteristicas_tablet">
            <img src="img/Mega_Evolution_icon.webp" class="img_mega" alt="">
        </div>
        <div class="caracteristicas_tablet">
            <img src="img/Gigamax.webp" class="img_mega" alt="">

        </div>
        <div class="caracteristicas_tablet">
            <img src="img/grafico-de-barras.png" class="img_mega" alt="">
        </div>
    </div>

  `;
});




const tablet = document.getElementById('tablet');

tablet.addEventListener('click', (e) => {
  // Detecta si se ha hecho clic en el botón cruz_atras
  if (e.target.closest('#cruz_atras')) {
    console.log("Parte abajo clickeada");

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
                    <img src="img/Icon_water.webp" id="boton_agua" onclick="createAll('water')">
                </div>

                <div class="cuadro">
                    <img src="img/Icon_bug.webp" id="boton_bicho" onclick="createAll('bug')">
                </div>
                <div class="cuadro">
                    <img src="img/Icon_fire.webp" id="boton_fuego" onclick="createAll('fire')">
                </div>
                <div class="cuadro">
                    <img src="img/Icon_grass.webp" id="boton_planta" onclick="createAll('grass')">
                </div>
                <div class="cuadro">
                    <img src="img/Icon_electric.webp" id="boton_electrico" onclick="createAll('electric')">
                </div>
                <div class="cuadro">
                    <img src="img/Icon_poison.webp" id="boton_veneno" onclick="createAll('poison')">
                </div>
                <div class="cuadro">
                    <img src="img/Icon_psychic.webp" id="boton_psiquico" onclick="createAll('psychic')">
                </div>
                <div class="cuadro">
                    <img src="img/Icon_rock.webp" id="boton_roca" onclick="createAll('rock')">
                </div>
                <div class="cuadro">
                    <img src="img/Icon_steel.webp" id="boton_acero" onclick="createAll('steel')">
                </div>
                <div class="cuadro">
                    <img src="img/Icon_dark.webp" id="boton_siniestro" onclick="createAll('dark')">
                </div>
                <div class="cuadro">
                    <img src="img/Icon_fairy.webp" id="boton_hada" onclick="createAll('fairy')">
                </div>
                <div class="cuadro">
                    <img src="img/Icon_fighting.webp" id="boton_lucha" onclick="createAll('fighting')">
                </div>
                <div class="cuadro">
                    <img src="img/Icon_flying.webp" id="boton_volador" onclick="createAll('flying')">
                </div>
                <div class="cuadro">
                    <img src="img/Icon_ground.webp" id="boton_tierra" onclick="createAll('ground')">
                </div>
                <div class="cuadro">
                    <img src="img/Icon_ice.webp" id="boton_hielo" onclick="createAll('ice')">
                </div>
                <div class="cuadro">
                    <img src="img/Icon_normal.webp" id="boton_normal" onclick="createAll('normal')">
                </div>
                <div class="cuadro">
                    <img src="img/Icon_dragon.webp" id="boton_dragon" onclick="createAll('dragon')">
                </div>
                <div class="cuadro">
                    <img src="img/Icon_ghost.webp"id="boton_fantasma"  onclick="createAll('ghost')">
                </div>
                <div class="cuadro">
                    <img src="img/c40c726b124c964055f7798279ba74e5-removebg-preview.png"id="todo_tipos">
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
  }
});















tablet.addEventListener('click', (e) => {
  // Detecta si se ha hecho clic en el botón cruz_atras
  if (e.target.closest('#todo_tipos')) {

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
                    <img src="img/Icon_water.webp" id="boton_agua" onclick="createAll('water')">
                </div>
                <div class="cuadro">
                    <img src="img/Icon_bug.webp" id="boton_bicho" onclick="createAll('bug')">
                </div>
                <div class="cuadro">
                    <img src="img/Icon_fire.webp" id="boton_fuego" onclick="createAll('fire')">
                </div>
                <div class="cuadro">
                    <img src="img/Icon_grass.webp" id="boton_planta" onclick="createAll('grass')">
                </div>
                <div class="cuadro">
                    <img src="img/Icon_electric.webp" id="boton_electrico" onclick="createAll('electric')">
                </div>
                <div class="cuadro">
                    <img src="img/Icon_poison.webp" id="boton_veneno" onclick="createAll('poison')">
                </div>
                <div class="cuadro">
                    <img src="img/Icon_psychic.webp" id="boton_psiquico" onclick="createAll('psychic')">
                </div>
                <div class="cuadro">
                    <img src="img/Icon_rock.webp" id="boton_roca" onclick="createAll('rock')">
                </div>
                <div class="cuadro">
                    <img src="img/Icon_steel.webp" id="boton_acero" onclick="createAll('steel')">
                </div>
                <div class="cuadro">
                    <img src="img/Icon_dark.webp" id="boton_siniestro" onclick="createAll('dark')">
                </div>
                <div class="cuadro">
                    <img src="img/Icon_fairy.webp" id="boton_hada" onclick="createAll('fairy')">
                </div>
                <div class="cuadro">
                    <img src="img/Icon_fighting.webp" id="boton_lucha" onclick="createAll('fighting')">
                </div>
                <div class="cuadro">
                    <img src="img/Icon_flying.webp" id="boton_volador" onclick="createAll('flying')">
                </div>
                <div class="cuadro">
                    <img src="img/Icon_ground.webp" id="boton_tierra" onclick="createAll('ground')">
                </div>
                <div class="cuadro">
                    <img src="img/Icon_ice.webp" id="boton_hielo" onclick="createAll('ice')">
                </div>
                <div class="cuadro">
                    <img src="img/Icon_normal.webp" id="boton_normal" onclick="createAll('normal')">
                </div>
                <div class="cuadro">
                    <img src="img/Icon_dragon.webp" id="boton_dragon" onclick="createAll('dragon')">
                </div>
                <div class="cuadro">
                    <img src="img/Icon_ghost.webp"id="boton_fantasma"  onclick="createAll('ghost')">
                </div>
                <div class="cuadro">
                    <img src="img/c40c726b124c964055f7798279ba74e5-removebg-preview.png"id="todo_tipos" onclick="createAll('todo_tipos')">
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
  }
});






function createAll(tipo){
    console.log("Parte arriba clickeada");
    const tablet = document.getElementById('tablet');
    tablet.innerHTML=``
    // Mostrar los tipos
    tablet.innerHTML = `
    <div class="volumen_1"></div>
    <div class="volumen_2"></div>
    <div class="info_1"></div>
    <div class="info_2"></div>
    <div class="parte_abajo_tablet" id="parte_abajo"></div>
    <div class="parte_arriba_tablet"></div>
    <div class="cruz_atras" id="cruz_atras">
        <img src="img/cruzado.png" class="img"alt="">
    </div>

    <div class="anterior"></div>
    <div class="siguiente_pokemon">
    <img src="img/flecha-hacia-arriba.png" alt="" id="siguiente">
    </div>
    <div class="anterior_pokemon">
        <img src="img/flecha-hacia-arriba.png" class="img_izquierda" alt="" id="anterior">
    </div>

    <div class="grid_caracteristicas_tablet">
        <div class="caracteristicas_tablet agua">
            <img src="img/Icon_${tipo}.webp"class="img_mega" alt="">
        </div>
        <div class="caracteristicas_tablet">
            <img src="img/Mega_Evolution_icon.webp" class="img_mega" alt="">
        </div>
        <div class="caracteristicas_tablet">
            <img src="img/Gigamax.webp" class="img_mega" alt="">

        </div>
        <div class="caracteristicas_tablet">
            <img src="img/grafico-de-barras.png" class="img_mega" alt="">
        </div>
    </div>
    `;
}









function obtenerImagenPokemon(id) {
  fetch(`/php/db.php?id=${id}`)
    .then(response => {
      if (!response.ok) throw new Error("Error en la respuesta del servidor");
      return response.json();  // Parseamos la respuesta JSON
    })
    .then(data => {
    console.log(data); // Esto te permite ver la respuesta completa de la API
      if (data.imagen) {
        const pantalla = document.getElementById('pantalla');
//aqui esta el pokemon
        pantalla.innerHTML = `
        <div class="nombre_pokemon_pokedex">
            <h1>${data.nombre}</h1>
        </div>
          <div class="pokemon">
              <img src="${data.imagen}" alt="" class="imagen_pokemon">
          </div>
        `;
        if (imagenElemento) {
          imagenElemento.src = data.imagen;
        }
      } else {
        console.error("No se encontró la imagen del Pokémon");
      }
    })
    .catch(error => console.error("Error:", error));
}
let idActual = 1;
obtenerImagenPokemon(idActual); // Llamada a la función para obtener la imagen



const siguiente = document.getElementById("siguiente");

document.addEventListener('click', function (e) {
  if (e.target && e.target.id === 'siguiente') {
    idActual++;
    obtenerImagenPokemon(idActual);

}
});

document.addEventListener('click', function (e) {
  if (e.target && e.target.id === 'anterior') {
    if (idActual >= 1) {
      idActual--;
      obtenerImagenPokemon(idActual);
    }
  }
});




















// cuerpo por tipos
{/* <div class="cruz_atras" id="cruz_atras">
<img src="img/cruzado.png" class="img"alt="">
</div>

<div class="anterior"></div>
<div class="siguiente_pokemon">
<img src="img/flecha-hacia-arriba.png" alt="">
</div>
<div class="anterior_pokemon">
<img src="img/flecha-hacia-arriba.png" class="img_izquierda" alt="">
</div>

<div class="grid_caracteristicas_tablet">
<div class="caracteristicas_tablet agua">
    <img src="img/Icon_water.webp"class="img_mega" alt="">
</div>
<div class="caracteristicas_tablet">
    <img src="img/Mega_Evolution_icon.webp" class="img_mega" alt="">
</div>
<div class="caracteristicas_tablet">
    <img src="img/Gigamax.webp" class="img_mega" alt="">

</div>
<div class="caracteristicas_tablet">
    <img src="img/grafico-de-barras.png" class="img_mega" alt="">
</div>

</div> */}













// <div class="parte_abajo_tablet" id="parte_abajo"></div>
// <div class="parte_arriba_tablet"></div>
// <div class="volumen_1"></div>
// <div class="volumen_2"></div>
// <div class="info_1"></div>
// <div class="info_2"></div>
// <div class="pantalla_uso" id="pantalla_uso">

//     <div class="grid">
//         <div class="cuadro">
//             <img src="img/Icon_water.webp" id="boton_agua" onclick="createAll('water')">
//         </div>
//         <div class="cuadro">
//             <img src="img/Icon_bug.webp" id="boton_bicho" onclick="createAll('bug')">
//         </div>
//         <div class="cuadro">
//             <img src="img/Icon_fire.webp" id="boton_fuego" onclick="createAll('fire')">
//         </div>
//         <div class="cuadro">
//             <img src="img/Icon_grass.webp" id="boton_planta" onclick="createAll('grass')">
//         </div>
//         <div class="cuadro">
//             <img src="img/Icon_electric.webp" id="boton_electrico" onclick="createAll('electric')">
//         </div>
//         <div class="cuadro">
//             <img src="img/Icon_poison.webp" id="boton_veneno" onclick="createAll('poison')">
//         </div>
//         <div class="cuadro">
//             <img src="img/Icon_psychic.webp" id="boton_psiquico" onclick="createAll('psychic')">
//         </div>
//         <div class="cuadro">
//             <img src="img/Icon_rock.webp" id="boton_roca" onclick="createAll('rock')">
//         </div>
//         <div class="cuadro">
//             <img src="img/Icon_steel.webp" id="boton_acero" onclick="createAll('steel')">
//         </div>
//         <div class="cuadro">
//             <img src="img/Icon_dark.webp" id="boton_siniestro" onclick="createAll('dark')">
//         </div>
//         <div class="cuadro">
//             <img src="img/Icon_fairy.webp" id="boton_hada" onclick="createAll('fairy')">
//         </div>
//         <div class="cuadro">
//             <img src="img/Icon_fighting.webp" id="boton_lucha" onclick="createAll('fighting')">
//         </div>
//         <div class="cuadro">
//             <img src="img/Icon_flying.webp" id="boton_volador" onclick="createAll('flying')">
//         </div>
//         <div class="cuadro">
//             <img src="img/Icon_ground.webp" id="boton_tierra" onclick="createAll('ground')">
//         </div>
//         <div class="cuadro">
//             <img src="img/Icon_ice.webp" id="boton_hielo" onclick="createAll('ice')">
//         </div>
//         <div class="cuadro">
//             <img src="img/Icon_normal.webp" id="boton_normal" onclick="createAll('normal')">
//         </div>
//         <div class="cuadro">
//             <img src="img/Icon_dragon.webp" id="boton_dragon" onclick="createAll('dragon')">
//         </div>
//         <div class="cuadro">
//             <img src="img/Icon_ghost.webp"id="boton_fantasma"  onclick="createAll('ghost')">
//         </div>
//         <div class="cuadro"></div>
//         <div class="cuadro"></div>
//         <div class="cuadro"></div>
//         <div class="cuadro"></div>
//         <div class="cuadro"></div>
//         <div class="cuadro"></div>
//         <div class="cuadro"></div>
//         <div class="cuadro"></div>
//         <div class="cuadro"></div>
//         <div class="cuadro"></div>
//     </div>
// </div>