const obtenerExperiencia =()=>{
    return fetch('http://localhost:3000/experiencia').then((respuesta) => respuesta.json());

}
const detallesExperiencia =(id)=>{
    return fetch(`http://localhost:3000/experiencia/${id}`).then((respuesta) => respuesta.json());
    
}


const actualizarExperiencia=(id, puesto, institucion, descripcion, fechaIinicio,fechaTerminacion)=>{
    return fetch(`http://localhost:3000/experiencia/${id}`,{
        method: 'PUT',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({id, puesto, institucion, descripcion, fechaIinicio,fechaTerminacion})
    }).then((respuesta) => console.log(respuesta));
}

const agregarExperiencia = (puesto, institucion, descripcion, fechaIinicio,fechaTerminacion)=>{
    return fetch(`http://localhost:3000/experiencia`,{
        method: 'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({puesto, institucion, descripcion, fechaIinicio,fechaTerminacion, id:uuid.v4()})
    }).then((respuesta) => console.log(respuesta));
}

const eliminarExperiencia =(id)=>{
    return fetch(`http://localhost:3000/experiencia/${id}`,{
        method:'DELETE'
    })
}


export const experienciaService ={
    obtenerExperiencia,
    detallesExperiencia,
    agregarExperiencia,
    actualizarExperiencia,
    eliminarExperiencia
}
