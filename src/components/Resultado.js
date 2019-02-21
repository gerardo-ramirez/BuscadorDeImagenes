import React, { Component } from 'react';
import Imagen from './Imagen';
import Paginacion from './Paginacion';
class Resultado  extends Component {
   

    mostrarImagenes = ()=>{
        const imagenes = this.props.image;
//opcion tutorial:
        if(imagenes.length === 0) return null ;
        console.log(imagenes);
        return (

  
            
            <React.Fragment>
                <div className='col-md-12 p-5 row'>
                {imagenes.map((imagen , index )=>(
                    <Imagen key={imagen.id}
                    imagen ={imagen}
                    tata={`este es su index: ${index}`}
                    />
                ))}

                </div>
                <Paginacion
                paginaAnterior ={this.props.paginaAnterior}
                paginaSiguiente= {this.props.paginaSiguiente}
                />
                </React.Fragment>
        )

       /* if(imagenes.length === 0){
           return console.log('no hay imagenes'); 
        } else{
            console.log(imagenes)
         return(<Imagen/>)
           

        }*/
    };
        
//Podemos renderizar una funcion que nos lleva a otro render.
    render (){
        return (
            <React.Fragment>
              {this.mostrarImagenes()}

            </React.Fragment>
        )
    }

}
export default Resultado;