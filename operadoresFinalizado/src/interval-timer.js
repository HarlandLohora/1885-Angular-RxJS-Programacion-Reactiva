import { interval, timer } from "rxjs"

const observer = {
    next: (valor) => console.log("El valor: ", valor),
    error: (error) => console.log(error),
    complete: () => console.log("Completado")
}

const source$ = timer(1000)

source$.subscribe(observer)