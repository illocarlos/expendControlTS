import AmountDisplay from "./AmountDisplay"

const BudgetTracker = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex justify-center">
                <img src="/grafico.jpg" alt="" />
            </div>
            <div className="flex flex-col justify-center items-center gap-8">
                <button
                    type="button"
                    className="bg-red-400 w-full p-2 text-center uppercase font-bolf rounded-lg"
                >reset app</button>
                <AmountDisplay
                    label="budget"
                    amount={300}
                />
                <AmountDisplay
                    label="aviable"
                    amount={200}
                />
                <AmountDisplay
                    label="expend"
                    amount={100}
                />
            </div>
        </div>
    )
}

export default BudgetTracker