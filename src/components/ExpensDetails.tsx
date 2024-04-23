import { useMemo } from 'react'
import { formateDate } from '../helpers/formateDate'
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from "react-swipeable-list"
import { Expense } from '../types/types'
import AmountDisplay from './AmountDisplay'
import { useBudget } from '../hooks/useBudget'
import { useShow } from '../hooks/useShow'
import { categories } from '../data/categoriesExpense'
import "react-swipeable-list/dist/styles.css"

type expenseDetailsProps = {
    expense: Expense
}


const ExpensDetails = ({ expense }: expenseDetailsProps) => {

    const isCategoryInfo = useMemo(() => categories.filter(cat => cat.id === expense.category)[0], [expense])
    const { dispatch: showDispatch } = useShow()
    const { dispatch: budgetDispatch } = useBudget()

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction
                onClick={() => {
                    budgetDispatch({ type: 'get-id-expensive', payload: { id: expense.id } })
                    showDispatch({ type: 'show-modal' })
                }}
            >
                update
            </SwipeAction>
        </LeadingActions>
    )
    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction
                onClick={() => budgetDispatch({ type: 'deleted-expensive', payload: { id: expense.id } })}
                destructive={true}
            >
                deleted
            </SwipeAction>
        </TrailingActions>
    )

    return (
        <SwipeableList>
            <SwipeableListItem
                maxSwipe={30}
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >

                <div className='bg-white shadow-lg p-10 w-full border-b border-gray-200 flex gap-5 items-center '>
                    <div>
                        <img
                            className='w-20'
                            src={`/icono_${isCategoryInfo.icon}.svg`} alt="" />
                    </div>
                    <div className='flex-1 space-y-2'>
                        <p className='text-sm font-bold uppercase text-slate-500'>{isCategoryInfo.name}</p>
                        <p className='text-slate-600 text-sm'>{expense.expenseName}</p>
                        <p className='text-slate-600 text-sm'>{formateDate(expense.date!.toString())}</p>
                    </div>
                    <AmountDisplay
                        amount={expense.amount}
                    />
                </div>
            </SwipeableListItem>

        </SwipeableList>
    )
}

export default ExpensDetails