import { fromEvent, map } from "rxjs"

const progressBar = document.querySelector("div")


const observer = {
    next(valor) {
        progressBar.style.width = valor + "%"
    }
}

const scroll$ = fromEvent(document, 'scroll')

const calcularPorcentaje = (elemento) => {
    const { scrollTop, scrollHeight, clientHeight } = elemento

    return (scrollTop / (scrollHeight - clientHeight)) * 100
}

scroll$
    .pipe(map((evento) => calcularPorcentaje(evento.target.documentElement)))
    .subscribe(observer)
