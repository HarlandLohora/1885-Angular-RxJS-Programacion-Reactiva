import { of, range } from "rxjs"

const observer = {
    next: (valor) => console.log("El valor: ", valor),
    error: (error) => console.log(error),
    complete: () => console.log("Completado")
}

// const source$ = of(1, 2, 3, 4, 5)
const source$ = range(1, 50)
source$.subscribe(observer)
