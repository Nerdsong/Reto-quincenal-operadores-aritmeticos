const DISTANCIA_KILOMETROS_TOLEDO = 2.6;
const DISTANCIA_METROS_TIENDA_A_TIO = 691;

let totalDistanciaMilimetros = 1000*((DISTANCIA_KILOMETROS_TOLEDO*1000) + DISTANCIA_METROS_TIENDA_A_TIO);

document.querySelector("#total_milimetros").innerHTML=`
    Respuesta: La distancia total recorrida fue de ${totalDistanciaMilimetros} milimetros.
`;