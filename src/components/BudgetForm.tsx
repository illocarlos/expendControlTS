import { ChangeEvent, useMemo, useState } from "react"

const BudgetForm = () => {

    const [budget, setbudget] = useState(0)


    const handleChangeBudget = (e: ChangeEvent<HTMLInputElement>) => {
        setbudget(e.target.valueAsNumber)
    }

    // useMemo es como un useEffect en menor escala ve un dato reactivo y devuelve un valor unico 
    //si en este caso budget cambia isvalid sera true o false en relacion al cambio de budget 
    //en otras palabras useMemo es como si usaramos en vueJs computed  

    const isValid = useMemo(() => {
        return isNaN(budget) || budget <= 0
    }, [budget])





    return (
        <form
            className=" space-y-5"
            action="">

            <div className="flex flex-col space-y-5">
                <label htmlFor="budget" className="text-4xl text-white font-bold text-center">
                    define budget
                </label>
                <input
                    placeholder="define budget here"
                    className="w-full border p-2 "
                    value={budget}
                    onChange={handleChangeBudget}
                    type="number" name="budget" id="budget" />
            </div>
            <input
                className="text-white font-extrabold cursor-pointer w-full text-center uppercase border border-white rounded-lg py-2
                hover:bg-white hover:text-black transition-all duration-500 disabled:opacity-20"
                value='define Budget'
                type="submit" name="" id=""
                disabled={isValid} />
        </form>
    )
}

export default BudgetForm