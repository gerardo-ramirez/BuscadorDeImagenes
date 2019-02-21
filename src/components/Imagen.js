import React from 'react';

const Imagen = (props)=>{
    const {LargeImageURL, likes, previewURL,tags, views}= props.imagen;
return(
    <div className='col-12 col-ms-6 col-md-4 col-lg-3 mb-4'>
    <div className='card'>
    <img src={previewURL} alt={tags} className="card-img-top" />
    <div className="card-body">
    <p className="card-text">{likes} Me gusta</p>
    <p className="card-text">{views} Vistas</p>

    <a href={LargeImageURL} target="_blank" className="btn btn-primary btn-block"> ir</a>

    </div>
    </div >
    </div>
)

}
export default Imagen;
