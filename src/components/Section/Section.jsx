import React from "react";
import { Statistics } from "components/Statistics/Statistics";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Component } from "react";
import { Feedback } from "./Section.styled";

export class Section extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    // обробляє натискання на кнопку
    onLeaveFeedback = key => {
        this.setState(prevState => ({ [key]: prevState[key] += 1 }))
    };

    render() {
        return (
            <Feedback>
                <h2>Please leave your feedback</h2>

                {/* блок кнопок */}
                <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} /> 

                {/* блок статистики */}
                <Statistics data={this.state}/>
            </Feedback>
        )
    }
}
