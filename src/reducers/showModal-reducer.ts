

// budgetAction se puede explicar como centralizamos las condiciones de budgetReducer y le definimos como se llamaran
//y que payload le pasamos 
//esto es un buen ejemplo por que es muy poca informacion y se lee bastante claro 
//en type le damos un nombre que esta conectado con alguna condicion de budgetReducer si coincide se realizara lo que hay dentro
//es decir es como si usaramos funciones  y le pasamos un argumento que seria el payload
//puede haber infinidad de action  y le puedes pasar lo que te apetezca siendo typescript aqui declaramos de que tipo sera 
//
export type ShowAction =
    { type: 'show-modal' } |
    { type: 'close-modal' }



// damos el valor del tipado por que es typescript
export type ShowState = {
    showModal: boolean
}



// este sera el valor inicial  del estado como es numerico y es un solo valor inicia en 0
export const initialState: ShowState = {
    showModal: false
}






// y esta es la funcion reducer  donde crearemos toda la logica esta conectada con las action 
//aqui podemos crear infinicad de condiciones para crear CRUD 
//la estructura es como la estamos poniendo 
export const showReducer = (
    state: ShowState = initialState,
    action: ShowAction


) => {

    if (action.type === 'show-modal') {
        return {
            ...state,
            showModal: true
        }
    }

    if (action.type === 'close-modal') {

        return {
            ...state,
            showModal: false
        }
    }


    return state

}