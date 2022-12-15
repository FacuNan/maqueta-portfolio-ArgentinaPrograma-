import { biografiaService } from "../../server/acercaDeMiServer.js";

const btnEdicion = document.querySelector('[data-btn]')
const inputBiografia = document.querySelector('[data-input-biografia]');
const biografia = document.querySelector('[data-biografia]')
const titulo = document.querySelector('.titulo')
const btnActualizar = document.querySelector('[data-actualizar]')

const obtenerBio = (bio) => {
    const contenido = ` ${bio}`
    const parrafoBiografia = document.createElement('p')
    parrafoBiografia.classList.add('informacionP')

    parrafoBiografia.innerHTML = contenido
    console.log(parrafoBiografia)
    return parrafoBiografia

}

biografiaService.obtenerBiografia().then((bioInfo) => {
    bioInfo.forEach(({ biografia }) => {
        const bioInfo = document.querySelector('[data-biografia]')
        const agregarBio = obtenerBio(biografia)
        bioInfo.appendChild(agregarBio)

    })
})

obtenerBio();
btnEdicion.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.type === 'click' && inputBiografia.style.display == 'block') {
        inputBiografia.style.display = 'none'
        biografia.style.display = ""
        titulo.style.display = ""
        btnActualizar.style.display="none"
    } else {
        inputBiografia.style.display = 'block';
        biografia.style.display = "none"
        titulo.style.display = "none"
        btnActualizar.style.display="block"
    }
})

biografiaService.obtenerBiografia().then((respuesta) => {
    respuesta.forEach((bio) => {
        inputBiografia.value = bio.biografia
    });
})



btnActualizar.addEventListener('click', () => {
    const biografia = inputBiografia.value;
    const id = btnEdicion.id;

   biografiaService.actualizaBiografia(id, biografia).then((e)=>{
    e.preventDefault();
    inputBiografia.style.display = 'none'
   })
   
})


