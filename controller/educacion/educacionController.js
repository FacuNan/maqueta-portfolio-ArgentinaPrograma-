import { educacionService } from "../../server/educacionService.js";

const obtenerEducaciones = (id, titulo, institucion, descripcion, fechaInicio, fechaTerminacion) => {

    const contenido = `
    <div class="anio">
        <h2>${fechaInicio}- ${fechaTerminacion}</h2>
        <h3>${titulo}</h3>
    </div>
    <div class="detalles">
        <h2>${institucion}</h2>
    </div>
`

    const educacion = document.createElement('div');
    educacion.classList.add('contenido-educacion')
    educacion.innerHTML = contenido
    console.log(educacion)
    return educacion

}

educacionService.obtenerEducacion().then((respuesta) => {
    respuesta.forEach(({ id, titulo, institucion, descripcion, fechaInicio, fechaTerminacion }) => {
        const eduLista = document.querySelector('[data-educacion]')
        const educaciones = obtenerEducaciones(id, titulo, institucion, descripcion, fechaInicio, fechaTerminacion)
        eduLista.appendChild(educaciones)
    })
})

