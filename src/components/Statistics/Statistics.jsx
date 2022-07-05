import React from "react";
import PropTypes from 'prop-types';
import Notification from "components/Notification/Notification";

function Statistics({ good, neutral, bad, total, positivePercentage }) {

    return (
        total ? 
            <div>
                <h3>Statistic</h3>
                <p>Good: <span>{good}</span></p>
                <p>Neutral: <span>{neutral}</span></p>
                <p>Bad: <span>{bad}</span></p>
                <p>Total: <span>{total}</span></p>
                <p>Positive feedback: <span>{positivePercentage || 0}%</span></p>
            </div> :
            <Notification message={"There is no feedback"} />
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number,
}

export default Statistics;