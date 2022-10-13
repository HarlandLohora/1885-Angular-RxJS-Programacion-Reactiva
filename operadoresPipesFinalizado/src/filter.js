import { of, filter, fromEvent, map } from "rxjs"

const observer = {
    next(valor) {
        console.log("El valor es: ", valor)
    },
    complete() {
        console.log("Completado")
    }
}

// const source$ = of(1, 2, 3, 4, 5)
const source$ = fromEvent(document, "keyup")

source$
    .pipe(
        map(valor => valor.key),
        filter(tecla => tecla === "Enter")
    )
    .subscribe(observer)