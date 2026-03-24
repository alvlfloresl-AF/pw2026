let nombreCompletoInput = null;
let submitButton = null;
document.addEventListener("DOMContentLoaded", () =>{
    nombreCompletoInput = document.getElementById(txtNombre);
    submitButton = document.getElementById("btnEnviar");
    submitButton.addEventListener("click", (e)=>{
        e.preventDefault();
        e.stopPropagation();
    });

});

function validarEspacioVacio(valor){
    //Todo: validar
}