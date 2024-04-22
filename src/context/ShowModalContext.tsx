import { useReducer, createContext, Dispatch, ReactNode } from "react"
import { ShowAction, ShowState, showReducer, initialState } from "../reducers/showModal-reducer.ts"

type ShowModalContextProp = {
    state: ShowState,
    dispatch: Dispatch<ShowAction>
}
type ShowModalProviderProps = {
    children: ReactNode
}
export const ShowModalContext = createContext<ShowModalContextProp>(null!)

export const ShowModalProvider = ({ children }: ShowModalProviderProps) => {

    const [state, dispatch] = useReducer(showReducer, initialState)
    return (
        <ShowModalContext.Provider
            value={{
                state,
                dispatch
            }}
        >
            {children}
        </ShowModalContext.Provider>
    )
}