
import React from "react";

 function pasarMesesAños({ mesesDeExperiencia }) {
   return (
     <>
       <label htmlFor="inputmeses">
         Ingrese la cantidad de meses de experiencia
       </label>
       <input
         id="inputmeses"
         type="number"
         onChange={(e) => {
        
          mesesDeExperiencia(Math.floor(Number(e.target.value) / 12));
         }}
       />
     </>
   );
 }
export default pasarMesesAños