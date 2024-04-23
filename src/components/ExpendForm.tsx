import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react"
import { DraftExpensive, Value } from "../types/types"
import { categories } from "../data/categoriesExpense"
import DatePicker from "react-date-picker"
import 'react-calendar/dist/Calendar.css'
import 'react-date-picker/dist/DatePicker.css'
import ErrorMessage from "./ErrorMessage"
import { useBudget } from "../hooks/useBudget"
import { useShow } from '../hooks/useShow'


const Expendform = () => {


    const [expense, setExpense] = useState<DraftExpensive>({
        amount: 0,
        expenseName: '',
        category: '',
        date: new Date()
    })

    const [previousAmount, setPreviousAmount] = useState(0)

    const [error, setError] = useState("")
    const { dispatch: showDispatch } = useShow()
    const { dispatch: budgetDispatch, state, totalAviable } = useBudget()

    useEffect(() => {
        if (state.editId) {
            const editExpens = state.expenses.filter(eachexpe => eachexpe.id === state.editId)[0]
            setExpense(editExpens)
            setPreviousAmount(editExpens.amount)

        }
    }, [state.editId])


    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target
        const isAmountFiel = ['amount'].includes(name)
        setExpense({
            ...expense,
            [name]: isAmountFiel ? Number(value) : value
        })
    }
    const handleChangeDate = (value: Value) => {
        setExpense({
            ...expense,
            date: value
        })
    }


    const resetModalAndexpense = () => {
        budgetDispatch({ type: 'reset-editid-expensive' })
        showDispatch({ type: 'close-modal' })
        setPreviousAmount(0)

    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault()
        if (Object.values(expense).includes("")) {
            setError("Fields Required")
            setTimeout(() => {
                setError("")
            }, 5000)
            return
        }
        if ((expense.amount - previousAmount) > totalAviable) {
            setError("budget insufficient")
            return
        }


        if (state.editId) {
            budgetDispatch({ type: 'edit-expensive', payload: { expenses: { id: state.editId, ...expense } } })


        } else {

            budgetDispatch({ type: 'add-expensive', payload: { expense } })
        }



        resetModalAndexpense()

    }

    const isError = useMemo(() => error, [error])
    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-5"
            action="">
            <legend
                className="uppercase text-center text-2xl font-black border-b-4 border-black"
            > {state.editId ? 'edit expend' : 'new expend'}</legend>
            {isError && <ErrorMessage
                error={error}
            />}
            <div className="flex flex-col gap-2">
                <label
                    className="text-xl "
                    htmlFor="expenseName"> new expense</label>
                <input type="text"
                    placeholder="add expense"
                    className="bg-slate-200 p-2"
                    name="expenseName"
                    id="expenseName"
                    value={expense.expenseName}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col gap-2">
                <label
                    className="text-xl "
                    htmlFor="amount"> cuantity</label>
                <input type="number"
                    placeholder="add expense"
                    className="bg-slate-200 p-2"
                    name="amount"
                    id="amount"
                    value={expense.amount}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col gap-2">
                <label
                    className="text-xl "
                    htmlFor="category"> categories</label>
                <select
                    className="bg-slate-200 p-2"
                    name="category"
                    id="category"
                    value={expense.category}
                    onChange={handleChange}
                >
                    <option value=""> select category </option>
                    {categories.map(category => (
                        <option
                            key={category.id}
                            value={category.id}>{category.name}</option>
                    ))}
                </select>
            </div>
            <div className="flex flex-col gap-2">
                <label
                    className="text-xl "
                    htmlFor="expenseName">  date expend</label>
                < DatePicker
                    onChange={handleChangeDate}
                    value={expense.date}
                    className='bg-slate-100 p-2 border-0'
                />
            </div>
            <input
                value={state.editId ? 'edit expend' : 'create expend'}
                className="cursor-pointer uppercase bg-black w-full p-2 text-white font-bold rounded-lg "
                type="submit" />
        </form>
    )
}

export default Expendform