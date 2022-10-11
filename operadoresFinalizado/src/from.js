import { from } from "rxjs"

const observer = {
    next: (valor) => console.log("El valor: ", valor),
    error: (error) => console.log(error),
    complete: () => console.log("Completado")
}

const source$ = from(fetch("https://api.github.com/users/harlandlohora"))

source$.subscribe(observer)