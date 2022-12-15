const obtenerBiografia =()=>{
    return fetch('http://localhost:3000/biografia').then((respuesta)=>
    respuesta.json())
}

const actualizaBiografia =(id, biografia)=>{
    return fetch(`http://localhost:3000/biografia/${id}`, {
        method: 'PUT',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({id, biografia})
    }).then((respuesta)=>console.log(respuesta))
    }
    

export const biografiaService={
obtenerBiografia,
actualizaBiografia
}