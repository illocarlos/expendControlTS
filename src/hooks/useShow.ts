

import { useContext } from "react";
import { ShowModalContext } from "../context/ShowModalContext";

export const useShow = () => {

    const context = useContext(ShowModalContext)
    if (!context) {
        throw new Error('useBudget is not define')

    }

    return context
}