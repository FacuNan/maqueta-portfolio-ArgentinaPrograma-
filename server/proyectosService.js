const obtenerProyectos =()=>{
    return fetch('http://localhost:3000/proyectos').then((respuesta) => respuesta.json());

}
const detallesProyecto =(id)=>{
    return fetch(`http://localhost:3000/proyectos/${id}`).then((respuesta) => respuesta.json());
    
}


const actualizarProyecto=(id, puesto, institucion, descripcion, fechaIinicio,fechaTerminacion)=>{
    return fetch(`http://localhost:3000/proyectos/${id}`,{
        method: 'PUT',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({id, puesto, institucion, descripcion, fechaIinicio,fechaTerminacion})
    }).then((respuesta) => console.log(respuesta));
}

const agregarProyecto = (puesto, institucion, descripcion, fechaIinicio,fechaTerminacion)=>{
    return fetch(`  http://localhost:3000/proyectos`,{
        method: 'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({puesto, institucion, descripcion, fechaIinicio,fechaTerminacion, id:uuid.v4()})
    }).then((respuesta) => console.log(respuesta));
}

const eliminarProyecto=(id)=>{
    return fetch(`http://localhost:3000/proyectos/${id}`,{
        method:'DELETE'
    })
}


export const experienciaService ={
    obtenerProyectos,
    detallesProyecto,
    agregarProyecto,
    actualizarProyecto,
    eliminarProyecto
}
