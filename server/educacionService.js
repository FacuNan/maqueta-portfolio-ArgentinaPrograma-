const obtenerEducacion =()=>{
    return fetch('http://localhost:3000/educacion').then((respuesta) => respuesta.json());

}
const detallesEducacion =(id)=>{
    return fetch(`http://localhost:3000/educacion/${id}`).then((respuesta) => respuesta.json());
    
}


const actualizarEducacion=(id, titulo, institucion, descripcion, fechaIinicio,fechaTerminacion)=>{
    return fetch(`http://localhost:3000/educacion/${id}`,{
        method: 'PUT',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({id, titulo, institucion, descripcion, fechaIinicio,fechaTerminacion})
    }).then((respuesta) => console.log(respuesta));
}

const agregarEducacion = (titulo, institucion, descripcion, fechaIinicio,fechaTerminacion)=>{
    return fetch(`http://localhost:3000/educacion`,{
        method: 'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({titulo, institucion, descripcion, fechaIinicio,fechaTerminacion, id:uuid.v4()})
    }).then((respuesta) => console.log(respuesta));
}

const eliminarEducacion =(id)=>{
    return fetch(`http://localhost:3000/educacion/${id}`,{
        method:'DELETE'
    })
}


export const experienciaService ={
    obtenerEducacion,
    detallesEducacion,
    agregarEducacion,
    actualizarEducacion,
    eliminarEducacion
}