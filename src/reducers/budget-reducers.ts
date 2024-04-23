
// budgetAction se puede explicar como centralizamos las condiciones de budgetReducer y le definimos como se llamaran
//y que payload le pasamos 
//esto es un buen ejemplo por que es muy poca informacion y se lee bastante claro 
//en type le damos un nombre que esta conectado con alguna condicion de budgetReducer si coincide se realizara lo que hay dentro
//es decir es como si usaramos funciones  y le pasamos un argumento que seria el payload
//puede haber infinidad de action  y le puedes pasar lo que te apetezca siendo typescript aqui declaramos de que tipo sera 

import { DraftExpensive, Expense, CategoriesType } from "../types/types"
import { v4 as uid } from "uuid"


export type BudgetAction =
    { type: 'define-budget', payload: { budget: number } } |
    { type: 'add-expensive', payload: { expense: DraftExpensive } } |
    { type: 'deleted-expensive', payload: { id: Expense['id'] } } |
    { type: 'get-id-expensive', payload: { id: Expense['id'] } } |
    { type: 'edit-expensive', payload: { expenses: Expense } } |
    { type: 'reset-editid-expensive' } |
    { type: 'reset-app' } |
    { type: 'add-filter-category', payload: { id: CategoriesType['id'] } }



// damos el valor del tipado por que es typescript
export type BudgetState = {
    budget: number,
    expenses: Expense[],
    editId: Expense['id'],
    category: CategoriesType['id']
}


// estas dos funciones son para crear un localstorage de la app
const initialBudget = (): number => {
    const localStorageBudget = localStorage.getItem('budget')
    return localStorageBudget ? Number(localStorageBudget) : 0

}
const initialExpend = (): Expense[] => {
    const localStorageExpend = localStorage.getItem('expenses')
    return localStorageExpend ? JSON.parse(localStorageExpend) : []

}







// este sera el valor inicial  del estado como es numerico y es un solo valor inicia en 0
export const initialState: BudgetState = {
    budget: initialBudget(),
    expenses: initialExpend(),
    editId: '',
    category: '',
}



const createExpense = (expensiveCreate: DraftExpensive): Expense => {
    return {
        ...expensiveCreate,
        id: uid()
    }
}

// y esta es la funcion reducer  donde crearemos toda la logica esta conectada con las action 
//aqui podemos crear infinicad de condiciones para crear CRUD 
//la estructura es como la estamos poniendo 
export const budgetReducer = (
    state: BudgetState = initialState,
    action: BudgetAction


) => {
    if (action.type === 'define-budget') {
        return {
            ...state,
            budget: action.payload.budget
        }
    }

    if (action.type === 'add-expensive') {


        const expense = createExpense(action.payload.expense)
        return {
            ...state,
            expenses: [...state.expenses, expense],
        }
    }
    if (action.type === 'deleted-expensive') {


        return {
            ...state,
            expenses: state.expenses.filter(eachExp => eachExp.id !== action.payload.id)
        }
    }

    if (action.type === 'get-id-expensive') {


        return {
            ...state,
            editId: action.payload.id
        }
    }
    if (action.type === 'edit-expensive') {


        return {
            ...state,
            expenses: state.expenses.map(expenses => expenses.id === state.editId ? action.payload.expenses : expenses),
        }
    }

    if (action.type === 'reset-editid-expensive') {


        return {
            ...state,
            editId: ''
        }
    }
    if (action.type === 'reset-app') {


        return {
            ...state,
            editId: '',
            expenses: [],
            budget: 0
        }
    }
    if (action.type === 'add-filter-category') {


        return {
            ...state,
            category: action.payload.id
        }
    }

    return state

}