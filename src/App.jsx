import {useEffect, useState } from 'react'
import TransFormarMesesAAños from'./TransFormarMesesAAños'
import SeleccionCasoEmerjencia from'./SeleccionCasoEmerjencia'

import './App.css'

function App() {
  const[puesto,setPuesto]=useState('')
const[puntaje,setPuntaje]=useState(0)
const[casoEmergenciaPuntaje, setCasoEmergenciaPuntaje]=useState(0)
const[materialesRadioactivos,setMaterialesRadioactivos]=useState(0)
const[meses,setMeses]=useState(0)
const[donas,setDonas]=useState(0)
useEffect(() => {
  if (puntaje <= 15) setPuesto("mantenimiento");
  if (puntaje >= 16 && puntaje <= 26) setPuesto("operador");
  if (puntaje >= 26 && puntaje <= 35) setPuesto("tecnico");
  if (puntaje >= 36) setPuesto("ingeniero");
}, [puntaje]);
function calcular(){
setPuntaje(casoEmergenciaPuntaje+materialesRadioactivos+meses-donas);
}
  return (
    <>
      <h1>Puesto laboral</h1>
      <TransFormarMesesAAños mesesDeExperiencia={setMeses} />
      <SeleccionCasoEmerjencia enviarAlPadre={setCasoEmergenciaPuntaje} />
      <label htmlFor="">trabajo comn materiales RADIO ACTIVOS </label>
      <br />
      <input
        id="materiaslesRadiactivos?"
        type="radio"
        name="respuestaDonas"
        onClick={() => setMaterialesRadioactivos(10)}
      />
      si
      <br />
      <input
        type="radio"
        name="respuestaDonas"
        onClick={() => setMaterialesRadioactivos(0)}
      />
      no
      <br />
      <label htmlFor="donas">Cuantas dona comio</label>
      <input
        type="number"
        id="donas "
        onChange={(e) => setDonas(Number(e.target.value))}
      />
      <button onClick={() => calcular()}>VER PUESTO DE TRABAJO </button>
      {puntaje !== 0&& <h1>Tu Puesto de trabajo sera {puesto}</h1>}
    </>
  );
}

export default App
