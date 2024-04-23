import { useReducer, createContext, Dispatch, ReactNode, useMemo } from "react"
import { BudgetAction, BudgetState, budgetReducer, initialState } from "../reducers/budget-reducers"

type BudgetContextProp = {
    state: BudgetState,
    dispatch: Dispatch<BudgetAction>,
    totalExpensive: number
    totalAviable: number
}
type BudgetProviderProps = {
    children: ReactNode
}
export const BudgetContext = createContext<BudgetContextProp>(null!)

export const BudgetProvider = ({ children }: BudgetProviderProps) => {

    const [state, dispatch] = useReducer(budgetReducer, initialState)

    const totalExpensive = useMemo(() => state.expenses.reduce((total, expensive) => expensive.amount + total, 0), [state.expenses])
    const totalAviable = state.budget - totalExpensive

    return (
        <BudgetContext.Provider
            value={{
                state,
                dispatch,
                totalExpensive,
                totalAviable
            }}
        >
            {children}
        </BudgetContext.Provider>
    )
}