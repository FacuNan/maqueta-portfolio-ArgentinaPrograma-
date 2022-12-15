import { perfilService } from "../server/perfilService.js";

const obtenerPerfil = (id, nombre, apellido, img, presentacion) => {

    const contenido = `
    <figure>
    <a class="icon__edicion-perfil"href="http://127.0.0.1:5500/formularios/formularioPerfil.html?id=${id}"><i class="fa fa-pen fa-sm" ></i></a> 
    <img src="${img}"
    alt="">
    <p>${nombre} ${apellido}</p>
    </figure>
  `



    const imgs = document.createElement('h1');
    imgs.classList.add('titulo')
    imgs.innerHTML = contenido
    console.log(imgs)
    return imgs

}

perfilService.obtenerInformacion().then((respuesta)=>{
    respuesta.forEach(({id, nombre, apellido, img, biografia})=>{
        const imagen= document.querySelector('[data-img]')
        const informacionPerfil= obtenerPerfil(id, nombre, apellido, img, biografia);
    
        imagen.appendChild(informacionPerfil);
       
    })
  

})



console.log('Hola mundo')