import { experienciaService } from "../../server/experienciaService.js";

const obtenerExperiencias= (id, puesto, institucion, descripcion, fechaInicio, fechaTerminacion) => {

    const contenido = `
    <div class="anio">
        <h2>${fechaInicio}- ${fechaTerminacion}</h2>
        <h3>${puesto}</h3>
    </div>
    <div class="detalles">
        <h2>${institucion}</h2>
    </div>
`

    const experiencia = document.createElement('div');
    experiencia.classList.add('contenido-experiencia')
    experiencia.innerHTML = contenido
    console.log(experiencia)
    return experiencia

}

experienciaService.obtenerExperiencia().then((respuesta) => {
    respuesta.forEach(({ id, puesto, institucion, descripcion, fechaInicio, fechaTerminacion }) => {
        const expLista = document.querySelector('[data-experiencia]')
        const experiencias = obtenerExperiencias(id, puesto, institucion, descripcion, fechaInicio, fechaTerminacion)
        expLista.appendChild(experiencias)
    })
})

