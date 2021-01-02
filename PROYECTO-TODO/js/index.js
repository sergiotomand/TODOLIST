// Selectores 

    const UL_TAREAS = document.querySelector("#listaDeTareas");
    const BOTONAGREGAR = document.querySelector("#botonTarea");
    const INPUT = document.querySelector("#input");
    const BOTONBORRAR = document.querySelector(".botonEliminar")


// Eventos

    BOTONAGREGAR.addEventListener("click", () => {
        const html =                                                        //Crea una variable local "html" para guardar el html que se va a inyectar 
                                                                            //Con el ${INPUT.value} recogemos el valor del input y se hace de manera dinamica
        `<li>
            <span> ${INPUT.value} </span>
            <button class="botonEliminar" onclick="borrar(this)"> Eliminar </button>               
        </li>`

        if (INPUT.value === '') {
            alert("Debes escribir alguna tarea!");
          } else {
            UL_TAREAS.insertAdjacentHTML('beforeend',html);                 // Sirve para añadir el html al "ul"
          }
          document.getElementById("input").value = "";                      // Borra el texto de input cuando le das a enviar

        
    });


// Funciones extra

    function borrar(elemento){
        elemento.parentElement.remove();

    };
    