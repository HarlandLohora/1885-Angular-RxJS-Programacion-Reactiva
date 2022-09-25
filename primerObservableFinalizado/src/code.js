import { Observable } from "rxjs"

console.log(Observable)

const observer = {
    next: (valor) => {
        console.log("El valor es: ", valor)
    },
    error: (error) => {
        console.log("El error es: ", error)
    },
    complete: () => {
        console.log("Observer completado")
    }
}


const obs$ = new Observable((subscriber) => {
    subscriber.next(1)
    subscriber.next(2)
    subscriber.next({ user: "HarlandLohora", role: "user" })
    //subscriber.error("Este es un error")
    setTimeout(() => {
        console.log("2 segundos")
    }, 2000)

    setTimeout(() => {
        console.log("3 segundos")
    }, 3000)
    subscriber.complete()
})
console.log("Inicio")
obs$.subscribe(observer)
console.log("Fin")

