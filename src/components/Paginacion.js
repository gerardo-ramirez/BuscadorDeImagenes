import React from 'react';

const Paginacion = props=>{
    return(
        <div className="py-3">
        {/*a traves de props pasamos tambien funciones , las funciones nacen en App*/}
        <button type="button" className="btn btn-success mr-1" onClick={props.paginaAnterior}>Anterior &larr; </button>
        <button type="button" className="btn btn-success mr-1" onClick={props.paginaSiguiente}>Siguiente &rarr; </button>

            </div>

    )
}
export default Paginacion; 