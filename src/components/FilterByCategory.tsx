import { ChangeEvent } from "react"
import { categories } from "../data/categoriesExpense"
import { useBudget } from "../hooks/useBudget"
const FilterByCategory = () => {

    const { dispatch } = useBudget()

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch({ type: 'add-filter-category', payload: { id: e.target.value } })
    }
    return (
        <div className="bg-white shadow-lg rounded-lg p-10">
            <form action="">

                <div className=" flex flex-col md:flex-row md:items-center gap-5">

                    <select id="category"
                        className="bg-slate-200 p-3 flex-1 rounded w-full"
                        onChange={handleChange}
                    >
                        <option value="">--filter by category--</option>
                        {
                            categories.map(categories => (
                                <option
                                    key={categories.id}
                                    value={categories.id}
                                >
                                    {categories.name}
                                </option>
                            ))
                        }
                    </select>
                </div>
            </form>
        </div>
    )
}

export default FilterByCategory