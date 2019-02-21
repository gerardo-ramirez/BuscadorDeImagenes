import React, { Component } from 'react';
import Buscador from './components/Buscador';
import Resultado from './components/Resultado';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      termino:'',
      imagenes:[],
      pagina: '',
    }
  
    
  } 

//--------Pasar de paginas (Metodos Finales)-----------------------------

  paginaSiguiente=() =>{
    let sumarPagina = this.state.pagina;
    sumarPagina += 1;
    this.setState({
      pagina: sumarPagina
    },()=>{
      this.consultarApi();
      this.scroll();
    })
    console.log(sumarPagina);

  }
  paginaAnterior= ()=>{
    let restarPagina = this.state.pagina;
    if(restarPagina === 1) return null;
    restarPagina -= 1;
    this.setState({
      pagina: restarPagina
    },()=>{
      this.consultarApi();
      this.scroll();
    });

  }


  //-----------------------LLamar a la API--------------------------------------
  
  
  
  consultarApi = () =>{
     const terminos = this.state.termino;
     const pagina = this.state.pagina;
      const url = `https://pixabay.com/api/?key=11553301-a916dda9081cf48f28df6f2b6&q=${terminos}&per_page=20&page=${pagina}`;
    
       //console.log(url);
       //leer visualmente la api:
       fetch(url)
       .then(response => response.json())
       
       .then( resultado=> this.setState({
         imagenes:resultado.hits
       
       }));

    }


    //------------------------------------tOMAMOS LOS DATOS DEL input--------


  datosBusqueda = (termino)=>{ 
    console.log(termino);
    this.setState({
      termino,
      pagina: 1,
    },()=>{
      this.consultarApi();
    })
  };


  //-------------AL cambiar la pagina volvemos arriba-------------------


  scroll = ()=>{// esta funcion hace que la pagina vuelva hacia arriba.
   const elemento  = document.querySelector('.jumbotron');
   elemento.scrollIntoView('smooth', 'end');
  };

  //----------------El renderizado---------------------------------------


  render() {
    return (
      <div className="App container">
        <header className="jumbotron">
          <h2 className="">Buscar imagenes </h2>
        
        <Buscador busqueda ={this.datosBusqueda}/>
        </header>
        <div className="row justify-content-center">
         <Resultado image ={this.state.imagenes}
         paginaAnterior ={this.paginaAnterior}
         paginaSiguiente= {this.paginaSiguiente}/>
        </div>
      </div>
    );
  }
}

export default App;
