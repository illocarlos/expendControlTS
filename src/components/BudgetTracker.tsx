import AmountDisplay from "./AmountDisplay"
import { useBudget } from "../hooks/useBudget"
import 'react-circular-progressbar/dist/styles.css'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
const BudgetTracker = () => {
    const { dispatch, state, totalExpensive, totalAviable } = useBudget()

    const percentage = Number(((totalExpensive / state.budget) * 100).toFixed(2))
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex justify-center">
                <CircularProgressbar
                    value={percentage}
                    styles={buildStyles({
                        pathColor: percentage > 85 ? '#E57373' : '#ffff' && percentage > 75 ? '#FDFD96' : '#ffff',
                        trailColor: '#9c9c9c',
                        textColor: percentage > 85 ? '#E57373' : '#ffff' && percentage > 75 ? '#FDFD96' : '#ffff',
                    })}
                    strokeWidth={16}
                    text={`${percentage}%`}
                />
            </div>
            <div className="flex flex-col justify-center items-center gap-8">
                <button
                    onClick={() => dispatch({ type: 'reset-app' })}
                    type="button"
                    className="bg-red-400 w-full p-2 text-center uppercase font-bolf rounded-lg"
                >reset app</button>
                <AmountDisplay
                    label="budget"
                    amount={state.budget}
                />
                <AmountDisplay
                    label="aviable"
                    amount={totalAviable}
                />
                <AmountDisplay
                    label="expend"
                    amount={totalExpensive}
                />
            </div>
        </div>
    )
}

export default BudgetTracker