import { fromEvent } from "rxjs";

const observer = {
    next: (valor) => console.log("El valor: ", valor),
    error: (error) => console.log(error),
    complete: () => console.log("Completado")
}

const source$ = fromEvent(document, "keyup")

source$.subscribe(observer)