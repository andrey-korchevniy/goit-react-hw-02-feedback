import React from "react";
import PropTypes from 'prop-types';
import { FeedbackArea, ButtonGreen, ButtonYellow, ButtonRed  } from "./FeedbackOptions.styled";
import { CgSmile, CgSmileNeutral, CgSmileSad } from "react-icons/cg";

export const FeedbackOptions = ({ onLeaveFeedback }) => {

    return (
        <FeedbackArea>
            <ButtonGreen onClick={() => onLeaveFeedback('good')}>
                <CgSmile size={47} />
            </ButtonGreen>
            <ButtonYellow onClick={() => onLeaveFeedback('neutral')}>
                <CgSmileNeutral size={47}/>
            </ButtonYellow>
            <ButtonRed onClick={() => onLeaveFeedback('bad')}>
                <CgSmileSad size={47}/>
            </ButtonRed>
        </FeedbackArea>
    )
};

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
}