function valida_envia() {
    var form = document.fvalida;

    // nombre
    if (form.nombre.value.trim().length === 0) {
        alert("TIENES QUE ESCRIBIR TU NOMBRE");
        form.nombre.focus();
        return false; 
    }

    // teléfono
    if (form.telefono.value.trim().length === 0) {
        alert("TIENES QUE ESCRIBIR TU TELÉFONO");
        form.telefono.focus();
        return false;
    }

    // Niño o Joven
    if (form.etapa.value === "Elegir") {
        alert("DEBES SELECCIONAR NIÑO O JOVEN");
        form.etapa.focus();
        return false;  
    }

    // edad
    if (form.edad.value.trim().length === 0) {
        alert("TIENES QUE ESCRIBIR TU EDAD.");
        form.edad.focus();
        return false;  
    }

    // opinión 
    if (form.opinion.value === "Elegir") {
        alert("DEBES DAR UNA OPINOION ACERCA DE LOS INSTRUCTORES");
        form.opinion.focus();
        return false;
    }

    // duda o sugerencia
    
    if (form.duda.value.trim().length === 0) {
        alert("POR FAVOR ESCRIBE ALGUNA DUDA O SUGERENCIA");
        form.duda.focus();
        return false;
    }
    

    alert("MUCHAS GRACIAS POR ENVIAR EL FORMULARIO");
    return true;  
}