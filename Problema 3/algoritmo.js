const PRECIO_HAMBURGUESA = 35 
const PRECIO_REFRESCO = 18 

let totalDinero = PRECIO_HAMBURGUESA + PRECIO_REFRESCO ;

document.querySelector("#dinero_pagado").innerHTML=`
    Respuesta: Pagó un total de $${totalDinero}
`;