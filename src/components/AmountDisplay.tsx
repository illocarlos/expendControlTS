import { formateDolar } from "../helpers/formateDolar"
type AmountDisplayProps = {
    label: string,
    amount: number
}

const AmountDisplay = ({ label, amount }: AmountDisplayProps) => {
    return (
        <p className="text-2xl text-white font-bold">
            <span
                className="font-black"
            >
                {label}:{" "}

            </span>
            <span
                className="font-black"
            >
                {formateDolar(amount)}
            </span>
        </p>
    )
}

export default AmountDisplay