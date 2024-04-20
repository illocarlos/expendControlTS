import { useReducer, createContext, Dispatch, ReactNode } from "react"
import { BudgetAction, BudgetState, budgetReducer, initialState } from "../reducers/budget-reducers"

type BudgetContextProp = {
    state: BudgetState,
    dispatch: Dispatch<BudgetAction>
}
type BudgetProviderProps = {
    children: ReactNode
}
export const BudgetContext = createContext<BudgetContextProp>(null!)

export const BudgetProvider = ({ children }: BudgetProviderProps) => {

    const [state, dispatch] = useReducer(budgetReducer, initialState)
    return (
        <BudgetContext.Provider
            value={{
                state,
                dispatch
            }}
        >
            {children}
        </BudgetContext.Provider>
    )
}