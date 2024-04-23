
import { useMemo } from "react"

import { useBudget } from "../hooks/useBudget"
import ExpensDetails from "./ExpensDetails"

const ExpendList = () => {
    const { state } = useBudget()


    const filterExpense = useMemo(() => state.category ? state.expenses.filter(exp => exp.category === state.category) : state.expenses, [state.category, state.expenses])

    return (


        <div className="mt-10">

            {
                filterExpense.length === 0 ?
                    <p className="text-gray-600 text-2xl font-bold"> No Expenses</p>
                    :
                    (
                        <>
                            <p className="text-gray-600 text-2xl font-bold my-3"> expenses list</p>
                            {filterExpense.map(eachExpense => (

                                <ExpensDetails
                                    key={eachExpense.id}
                                    expense={eachExpense}
                                />
                            ))}
                        </>

                    )

            }
        </div>


    )
}

export default ExpendList