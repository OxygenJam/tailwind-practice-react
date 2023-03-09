
import tw, { styled } from 'twin.macro';

const StyledDiv = styled.div( /* ({attrib}) => [] */ ({ isRound }) => [
    tw`bg-white`,
    tw`border-yellow-200`,
    tw`border-8`,
    isRound && tw`rounded-md`
]);

const Card = (props) => {
    const isRound = props.isRound;
    return (
        <StyledDiv isRound={isRound}>
            {props.children}
        </StyledDiv>
    )
}

export default Card;