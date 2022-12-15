const obtenerInformacion = () =>{
    return fetch('http://localhost:3000/perfil').then((respuesta)=> respuesta.json())
}


const detallesPerfil =(id)=>{
return fetch(`http://localhost:3000/perfil/${id}`).then((respuesta) => respuesta.json());
}

const actualizarPerfil =(id, nombre, apellido, img, biografia)=>{
return fetch(`http://localhost:3000/perfil/${id}`, {
    method: 'PUT',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({id, nombre, apellido, img, biografia})
}).then((respuesta)=>console.log(respuesta))
}



export const perfilService = {
obtenerInformacion,
detallesPerfil,
actualizarPerfil
}