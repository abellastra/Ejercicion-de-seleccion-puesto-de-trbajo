
import React, { useEffect, useState } from "react"
function SeleccionCasoEmerjencia({ enviarAlPadre}) {

    const [casoEmergenciaPuntaje, setCasoEmergenciaPuntaje]= useState(0);
    useEffect(()=>{
      enviarAlPadre(casoEmergenciaPuntaje);
    },[casoEmergenciaPuntaje])
    return (
      <>
        <br />{" "}
        <label htmlFor="">
          Seleccione que haria usted en un caso de emerjencia
        </label>
        <br />
        <input
          id="casoEmergencia"
          type="radio"
          name="respuesta"
          onClick={(() => {setCasoEmergenciaPuntaje(15), enviarAlPadre(casoEmergenciaPuntaje)})}
        />
        Activar protocolo de emerjencia
        <br />
        <input
          id="casoEmergencia"
          type="radio"
          name="respuesta"
          onClick={() =>{ setCasoEmergenciaPuntaje(10), enviarAlPadre(casoEmergenciaPuntaje);}}
        />
        Correr
        <br />{" "}
        <input
          id="casoEmergencia"
          type="radio"
          name="respuesta"
          onClick={() => {setCasoEmergenciaPuntaje(5),enviarAlPadre(casoEmergenciaPuntaje)}}
        />
        Saltar del 9° piso
        <br />{" "}
        <input
          id="casoEmergencia"
          type="radio"
          name="respuesta"
          onClick={() =>{ setCasoEmergenciaPuntaje(0), enviarAlPadre(casoEmergenciaPuntaje);}}
        />
        Seguir durmiendo
        <br />
      </>
    );
}
export default SeleccionCasoEmerjencia