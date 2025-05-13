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
        <div class="caracteristicas_tablet agua" id="todo_tipos">
            <img src="img/Icon_grass.webp" class="img_mega2" >
        </div>
        <div class="caracteristicas_tablet">
            <img src="img/Mega_Evolution_icon.webp" class="img_mega3" id="boton_mega">
        </div>
        <div class="caracteristicas_tablet">
            <img src="img/Gigamax.webp" class="img_mega" id="boton_gigamax">

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


            </div>
        </div>
    `;
  }
});

















tablet.addEventListener('click', (e) => {
  // Detecta si se ha hecho clic en el botón cruz_atras
  if (e.target.closest('#todo_tipos')) {
    const tablet = document.getElementById('tablet'); // o el ID que uses

    tablet.innerHTML = ``
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
            </div>
        </div>
    `;
  }
});






function createAll(tipo){
    console.log("Parte arriba clickeada");
    const pantalla = document.getElementById('pantalla');
    let idActual = 0; // Inicializar el ID actual del Pokémon
    let pokemons = []; // Array para almacenar los Pokémon recibidos
    
    function obtenerPokemonTipo(tipo) {
      fetch(`/php/pokemon_por_tipo.php?tipo=${tipo}`)
        .then(response => {
          if (!response.ok) throw new Error("Error en la respuesta del servidor");
          return response.json();  
          
        })
        
        .then(data => {

          console.log(data); // Ver los datos de respuesta
    
          if (data && data.length > 0) {
            pokemons = data;  // Almacenamos los Pokémon recibidos en el array
            mostrarPokemon(idActual);  // Mostrar el primer Pokémon
          } else {
            console.error("No se encontró el Pokémon");
          }
          
        })
        .catch(error => console.error("Error:", error));
        
    }
    
    function mostrarPokemon(index) {

      const pantalla = document.getElementById('pantalla');
      if (index >= 0 && index < pokemons.length) {
        const pokemon1 = pokemons[index];
        
        pantalla.innerHTML = `
          <div class="nombre_pokemon_pokedex">
            <h1>${pokemon1.nombre}</h1>
          </div>
          <div class="pokemon">
            <img src="${pokemon1.imagen}" alt="${pokemon1.nombre}" class="imagen_pokemon">
          </div>
        `;
      pokemon=`${pokemon1.nombre}`;

      } else {
        console.error("Índice fuera de rango.");
      }
    }
    
    // Evento para cambiar al siguiente Pokémon
    document.addEventListener('click', function (e) {
      if (e.target && e.target.id === 'siguiente_tipo') {
        if (idActual < pokemons.length - 1) {
            idActual++;  // Incrementamos el índice para el siguiente Pokémon

            mostrarPokemon(idActual);

        } else {
          console.log("No hay más Pokémon en este tipo.");
        }
      }
    
      if (e.target && e.target.id === 'anterior_tipo') {
        if (idActual > 0) {  // Aseguramos que no se pueda ir a un índice menor a 0
          idActual--;  // Decrementamos el índice para el Pokémon anterior

          mostrarPokemon(idActual);

        } else {
          console.log("Ya estás en el primer Pokémon.");
        }
      }
    });
    
    // Llamada inicial para cargar el primer tipo de Pokém    
    
      
      obtenerPokemonTipo(`${tipo}`); // Llamada a la función para obtener la imagen


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
    <img src="img/flecha-hacia-arriba.png" alt="" id="siguiente_tipo">
    </div>
    <div class="anterior_pokemon">
        <img src="img/flecha-hacia-arriba.png" class="img_izquierda" alt="" id="anterior_tipo">
    </div>

    <div class="grid_caracteristicas_tablet">
        <div class="caracteristicas_tablet agua">
            <img src="img/Icon_${tipo}.webp"class="img_mega" alt="">
        </div>
        <div class="caracteristicas_tablet">
            <img src="img/Mega_Evolution_icon.webp" class="img_mega3" id="boton_mega">
        </div>
        <div class="caracteristicas_tablet">
            <img src="img/Gigamax.webp" class="img_mega" id="boton_gigamax">

        </div>
        <div class="caracteristicas_tablet">
            <img src="img/grafico-de-barras.png" class="img_mega" id="boton_estadisticas" >
        </div>
    </div>
    `;
}





































let pokemon;

function obtenerImagenPokemon(id) {
  fetch(`/php/db.php?id=${id}`)
    .then(response => {
      if (!response.ok) throw new Error("Error en la respuesta del servidor");
      return response.json();  
    })
    .then(data => {
      console.log(data); 

      if (data.imagen) {
        pokemon=`${data.nombre}`;

        const pantalla = document.getElementById('pantalla');
        pantalla.innerHTML = `
          <div class="nombre_pokemon_pokedex">
              <h1>${data.nombre}</h1>
          </div>
          <div class="pokemon">
              <img src="${data.imagen}" alt="" class="imagen_pokemon">
          </div>
          <div class="pokemon_id_pokedex">
            <h1>${data.id}</h1>
          </div>
        `;
      } else {
        console.error("No se encontró la imagen del Pokémon");
      }

      if (data.tipo) {
        
        const todo_tipos = document.getElementById('todo_tipos');

        if (todo_tipos) {
          todo_tipos.innerHTML = `
          `;
          todo_tipos.innerHTML = `
            <img src="img/Icon_${data.tipo}.webp" class="img_mega2" >
          `;
        console.log(data.tipo);

        }
      } else {
        console.error("No se encontró el tipo del Pokémon");
      }
    })
    .catch(error => console.error("Error:", error));
}

console.log(pokemon);  // Ahora puedes obtener el valor de pokemon después de la asignación


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














let esMega = false;
let megaIndex = 0;
let lastPokemon = null;

// Aquí defines para cada Pokémon sus sufijos “mega” disponibles.
// Si no está, asumimos que sólo tiene una Mega genérica.
const megaVariants = {
  charizard: ['x', 'y'],
  // añade otros si quieres:
  // mewtwo: ['x', 'y'],
  // gardevoir: [''],
};

function obtenerMega(nombre) {
  const key = nombre.toLowerCase().trim();
  const variants = megaVariants[key] || [''];        // sufijos a iterar
  // Si cambiamos de Pokémon, reiniciamos el índice:
  if (lastPokemon !== key) {
    megaIndex = 0;
    lastPokemon = key;
  }
  // Ajustamos el índice para que no desborde:
  if (megaIndex >= variants.length) {
    megaIndex = 0;
  }

  // Construimos el nombre de la forma concreta:
  const sufijo = variants[megaIndex];
  const nombreMega = sufijo
    ? `${key}-mega-${sufijo}`
    : `${key}-mega`;

  console.log(
    `Buscando Mega para "${nombre}" → query="${nombreMega}" (índice ${megaIndex}/${variants.length})`
  );

  fetch(`/php/ensenyar_megaevolucion.php?nombre=${encodeURIComponent(nombreMega)}`)
    .then(res => {
      if (!res.ok) throw new Error("Respuesta no OK del servidor");
      return res.json();
    })
    .then(data => {
      console.log("Respuesta del servidor:", data);

      if (!Array.isArray(data) || data.length === 0) {
        alert(`${nombre} no tiene la variante "${nombreMega}".`);
        return;
      }

      // Usamos siempre la primera (normalmente tu PHP devuelve sólo esa):
      const mega = data[0];
      console.log("Pintando Mega:", mega);
      esMega = true;
      megaIndex++;  // preparamos la siguiente variante

      document.getElementById('pantalla').innerHTML = `
        <div class="nombre_pokemon_pokedex">
          <h1>${mega.nombre}</h1>
        </div>
        <div class="pokemon">
          <img src="${mega.imagen}" alt="${mega.nombre}" class="imagen_pokemon">
        </div>
      `;
    })
    .catch(err => {
      console.error("Error fetch:", err);
      alert("Error al buscar la MegaEvolución.");
    });
}

document.addEventListener('click', e => {
  if (e.target && e.target.id === 'boton_mega') {
    if (!pokemon) {
      alert("Selecciona un Pokémon primero.");
      return;
    }
    obtenerMega(pokemon);
  }
});














let esGigamax = false;
let ultimoPokemonGigamax = null;

function obtenerGigamax(nombre) {
  const key = nombre.toLowerCase().trim();
  const nombreGigamax = `${key}-gmax`;

  // Si es un Pokémon nuevo, reseteamos el estado
  if (ultimoPokemonGigamax !== key) {
    esGigamax = false;
    ultimoPokemonGigamax = key;
  }

  // Si ya está en forma Gigamax, volvemos a la forma normal
  if (esGigamax) {
    obtenerPokemonNormal(nombre); // Asegúrate de tener esta función definida
    esGigamax = false;
    return;
  }

  console.log(`Buscando forma Gigamax: ${nombreGigamax}`);

  fetch(`/php/sacar_gigamax.php?nombre2=${encodeURIComponent(nombreGigamax)}`)
    .then(res => {
      if (!res.ok) throw new Error("Respuesta no OK del servidor");
      return res.json();
    })
    .then(data => {
      console.log("Respuesta del servidor:", data);

      if (!Array.isArray(data) || data.length === 0 || data.error) {
        alert(`${nombre} no tiene forma Gigamax.`);
        return;
      }

      const gmax = data[0];
      esGigamax = true;

      document.getElementById('pantalla').innerHTML = `
        <div class="nombre_pokemon_pokedex">
          <h1>${gmax.nombre}</h1>
        </div>
        <div class="pokemon">
          <img src="${gmax.imagen}" alt="${gmax.nombre}" class="imagen_pokemon">
        </div>
      `;
    })
    .catch(err => {
      console.error("Error fetch:", err);
      alert("Error al buscar la forma Gigamax.");
    });
}

document.addEventListener('click', e => {
  if (e.target && e.target.id === 'boton_gigamax') {
    if (!pokemon) {
      alert("Selecciona un Pokémon primero.");
      return;
    }
    obtenerGigamax(pokemon);
  }
});





// Tabla de Habilidades




document.getElementById('pantalla').innerHTML = `
  <div class="tabla_estadisticas">
   <div class="detalles_pokemon_pokedex">
    <a class="descripcion_pokemon"> ${descripcion}</a>
  </div>
  `