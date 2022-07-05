import React from "react";
import PropTypes from 'prop-types';

function FeedbackOptions({ options , onLeaveFeedback }) {

    return (
        <>
            {Object.keys(options).map(key => 
                <button
                    className="button"
                    key={key}
                    onClick={() => onLeaveFeedback(key)}>{key}
                </button>)
            }
        </>
    )
};

FeedbackOptions.propTypes = {
    options: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;