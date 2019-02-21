import React, { Component } from 'react';
class Buscador extends Component {
    //la funcion react.createref me permite entender el input.
    busquedaRef = React.createRef();
    obtenerDatos = (e)=>{
        e.preventDefault();
        //(this.busquedaRef.current.value) nos permite leer el valor del input;
        const termino = this.busquedaRef.current.value;
        this.props.busqueda(termino);
    }
    render(){
        return(
            <div className=" row card">
            <div className="col-md-8 card-header">
            <form className="card-body row" onSubmit={this.obtenerDatos}>
            <div className="col-md-8 form-group">
            {/* busquedaRef remite a React.createRef() y se coloca en ref
            sobre el input para que react tome el valor de ese input */}
            <input ref={this.busquedaRef} type="text" name="name" placeholder="Buscar imagen" className="form-control"/>
            </div>
            <div className="col-md-4 form-group">
            <input type="submit" value="Buscar..."  className="btn btn-block btn-success"/>
            </div>

            </form>

            </div>
            </div>
            
        )
    }

}
export default Buscador ;