function agregarTarea(){
    let nuevaTareaTexto = document.getElementById("nuevaTarea").value;
    if(nuevaTareaTexto === ""){
        alert("Por favor, rellena el campo");
        return;
    }

    // Creo elemento de la lista
    let nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = nuevaTareaTexto + " ";

    // Creo el botón de borrar
    let botonBorrar = document.createElement("button");
    botonBorrar.textContent = "Borrar";
    botonBorrar.onclick = function(){ nuevaTarea.remove();}

    // Agrego el boton de borrar a la tarea de la lista
    nuevaTarea.appendChild(botonBorrar);

    // Agregar la tarea a la lista
    document.getElementById("listaTareas").appendChild(nuevaTarea);

    // Limpio el campo de texto
    document.getElementById("nuevaTarea").value = "";
}