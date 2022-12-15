import { perfilService } from "../server/perfilService.js";

const detallePerfil =()=>{
    const url = new URL(window.location);
    const ide = url.searchParams.get('id');

    const nombre = document.querySelector('[data-nombre]')
    const apellido = document.querySelector('[data-apellido]');
    const imagen = document.querySelector('[data-img');
    const descripcion = document.querySelector('[data-biografia]');

perfilService.detallesPerfil(ide).then((perfil)=>{
nombre.value =perfil.nombre;
apellido.value= perfil.apellido;
imagen.value= perfil.img;
 descripcion.value = perfil.biografia
})


}

detallePerfil();


const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', (e)=>{
e.preventDefault();
const url = new URL(window.location);
const ide = url.searchParams.get('id');

const nombre = document.querySelector('[data-nombre]').value
const apellido = document.querySelector('[data-apellido]').value;
const img = document.querySelector('[data-img').value;
const biografia = document.querySelector('[data-biografia]').value;


perfilService.actualizarPerfil(ide, nombre, apellido, img, biografia).then(()=>{
    window.location.href = "http://127.0.0.1:5500/index.html"
})
})