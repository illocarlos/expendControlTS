import BudgetForm from "./components/BudgetForm"
import { useBudget } from "./hooks/useBudget"

function App() {
  const { state, dispatch } = useBudget()
  return (
    <>
      <header className="py-8 max-h-72 bg-black">
        <h1 className="uppercase text-center font-black text-white text-4xl">

          expense planner
        </h1>
      </header>
      <div className="max-w-3xl mx-auto bg-black shadow-lg rounded-lg mt-10 p-10">
        <BudgetForm />
      </div>
    </>
  )
}

export default App
