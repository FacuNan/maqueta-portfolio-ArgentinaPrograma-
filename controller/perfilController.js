import { perfilService } from "../server/perfilService.js";

const obtenerPerfil = (id, nombre, apellido, img, biografia) => {

    const contenido = `<img src="${img}"
    alt="">`

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