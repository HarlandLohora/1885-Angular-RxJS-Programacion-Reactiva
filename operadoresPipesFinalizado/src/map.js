import { of, map, fromEvent } from "rxjs"

const observer = {
    next(valor) {
        console.log("El valor es: ", valor)
    },
    error: (error) => {
        console.log(error)
    }
}

// const source$ = of("a", "b", "c")
const source$ = fromEvent(document, "keyup")

source$
    .pipe(map((valor) => valor.key))
    .subscribe(observer)
