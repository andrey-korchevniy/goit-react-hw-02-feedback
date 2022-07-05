import React from "react";
import PropTypes from 'prop-types';
import 'components/Section/section.css'
import Statistics from "components/Statistics/Statistics";
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";

function Section ({ title, polls, onLeaveFeedback, countPositiveFeedbackPercentage, countTotalFeedback }) {
    const { good, neutral, bad } = polls;
    const total = countTotalFeedback(polls);
    const positivePercentage = countPositiveFeedbackPercentage(polls);

    return(       
        <div className="feedback">
            {title && <h2>{title}</h2>}
            <FeedbackOptions options={polls} onLeaveFeedback={onLeaveFeedback} />
            <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
        </div>
    )
}

Section.propTypes = {
    title: PropTypes.string,
    polls: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
    countPositiveFeedbackPercentage: PropTypes.func.isRequired,
    countTotalFeedback: PropTypes.func.isRequired,
}

export default Section;