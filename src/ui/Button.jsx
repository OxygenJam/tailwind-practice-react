

export const ConfirmButton = (props) => {
    return (
        <button className="text-white bg-green-500 focus:bg-green-700 focus:ring-2 focus:ring-green-500">
            {props.children}
        </button>
    )
}

export const CancelButton = (props) => {
    return (
        <button className="text-white bg-red-500 focus:bg-red-700 focus:ring-2 focus:ring-red-500">
            {props.children}
        </button>
    )
}

export default ConfirmButton;