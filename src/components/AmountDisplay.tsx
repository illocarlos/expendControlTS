import { formateDolar } from "../helpers/formateDolar"
type AmountDisplayProps = {
    label?: string,
    amount: number
}

const AmountDisplay = ({ label, amount }: AmountDisplayProps) => {
    return (
        <p className="text-2xl font-bold">
            <span
                className="text-white uppercase font-black"
            >
                {label}:{" "}

            </span>
            <span
                className="font-black  text-red-400 "
            >
                {formateDolar(amount)}
            </span>
        </p>
    )
}

export default AmountDisplay