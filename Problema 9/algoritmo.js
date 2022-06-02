//Velcidad final = aceleración * tiempo

const ACELERACION_KM_H_2 = 20;
const VELOCIDAD_FINAL_KM_H = 60;

let tiempoTotal = "incognita";

tiempoTotal = VELOCIDAD_FINAL_KM_H/ACELERACION_KM_H_2

document.querySelector("#respuesta").innerHTML=`
    <h3> Respuesta: El tiempo que tarda en alcanzar ${VELOCIDAD_FINAL_KM_H} kilometros por hora, es de ${tiempoTotal} horas </h3>
`;

