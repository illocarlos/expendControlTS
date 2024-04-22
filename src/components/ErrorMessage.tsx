

type ErrorMessageProps = {
    error: string
}

const ErrorMessage = ({ error }: ErrorMessageProps) => {
    return (
        <p className=" text-red-400 font-bold text-center">{error}</p>
    )
}

export default ErrorMessage