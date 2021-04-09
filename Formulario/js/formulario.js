/* Estructura función JS:
Tipo 1 estandar:
    function nombreFuncion(param1, param2...){
        ...
    }
    
Tipo 2 función anónima o clousure:
    const funcionAnonima = function(param1, param2...){
        ...
    }
    
Tipo 3 funcion flecha
    const funcionFlecha = (param1, param2...)=>{
        ...
    }*/

function capturaValoresInput() {
    let capturaNombre = document.getElementById("user_name").value;
    document.getElementById("verNombre").innerHTML = capturaNombre;
}