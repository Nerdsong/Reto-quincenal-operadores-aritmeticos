const CANTIDAD_GALLETAS_POR_CAJA = 5;
const CANTIDAD_CAJA = 4;

let totalGalletas = CANTIDAD_GALLETAS_POR_CAJA*CANTIDAD_CAJA;

document.querySelector("#total_galletas").innerHTML=`
    Respuesta: Tenemos ${totalGalletas} galletas
`;