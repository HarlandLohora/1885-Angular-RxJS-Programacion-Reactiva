import { range, take, first, last } from "rxjs"

const observer = {
    next(valor) {
        console.log(valor)
    },
    complete() {
        console.log("Completado")
    }
}

const source$ = range(1, 500)

source$
    .pipe(last())
    .subscribe(observer)