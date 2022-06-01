const MAGDALENAS_JUAN = 28;
const AMIGOS_DE_JUAN = 12;

let totalMagdalenas = MAGDALENAS_JUAN - AMIGOS_DE_JUAN - 1;

document.querySelector("#total_magdalenas").innerHTML=`
    Respuesta: Quedan ${totalMagdalenas} Magdalenas  
`;