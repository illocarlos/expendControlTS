import { useEffect, useMemo } from "react"
import BudgetForm from "./components/BudgetForm"
import { useBudget } from "./hooks/useBudget"
import BudgetTracker from "./components/BudgetTracker"
import ExpenseModal from "./components/ExpendModal"
import ExpendList from "./components/ExpendList"
import FilterByCategory from "./components/FilterByCategory"

function App() {
  // usamos el context desde un hook para que pase un filtro  y si no existe en este caso buget en la aplicacion de un error y avise 
  //en este caso abrazamos con el context esta aplicacion
  //normalmente no haria falta directamente llamas al context y al tenerlo en main ya tendrias ese estado global
  //pero es una buena practica es un filtro al que debe de pasar
  const { state } = useBudget()
  const isBudget = useMemo(() => state.budget > 0 || isNaN(state.budget), [state.budget])

  useEffect(() => {
    localStorage.setItem('budget', state.budget.toString())
    localStorage.setItem('expenses', JSON.stringify(state.expenses))
  }, [state])

  return (
    <>
      <header className="py-8 max-h-72 bg-black">
        <h1 className="uppercase text-center font-black text-white text-4xl">

          expense planner
        </h1>
      </header>
      <div className="max-w-3xl mx-auto bg-black shadow-lg rounded-lg mt-10 p-4">
        {isBudget ? <BudgetTracker /> : <BudgetForm />}
      </div>
      {isBudget && (
        <div className=" max-w-3xl mx-auto py-10">
          <FilterByCategory />
          <ExpendList />
          <ExpenseModal />

        </div>

      )}
    </>
  )
}

export default App
