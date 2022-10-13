import { pluck, fromEvent, mapTo, map } from "rxjs"

const observer = {
    next(valor) {
        console.log("El valor es: ", valor)
    },
    error: (error) => {
        console.log(error)
    }
}

const source$ = fromEvent(document, "keyup")

source$
    .pipe(map(() => "Nueva tecla"))
    .subscribe(observer)