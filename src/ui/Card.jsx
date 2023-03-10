
const Card = (props) => {
    const isRound = props.isRound;
    return (
        <div className={`card ${isRound ? 'rounded-md' : ''} ${props.className}`}>
            {props.children}
        </div>
    )
}

export default Card;