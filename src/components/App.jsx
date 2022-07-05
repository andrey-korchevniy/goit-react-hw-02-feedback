import React, {Component} from "react";
import Section from "./Section/Section";

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    onLeaveFeedback = key => {
        this.setState(prevState => ({[key]: prevState[key] += 1}))
    }

    countTotalFeedback = ({ good, neutral, bad }) => {
        return (good + neutral + bad);
    }

    countPositiveFeedbackPercentage = ({ good, neutral, bad }) => {
        return (Math.round((good / (good + neutral + bad))*100));
    }
    
  render() {
    return (
      <Section
        title={'Please leave feedback'}
        polls={this.state}
        onLeaveFeedback={this.onLeaveFeedback}
        countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
        countTotalFeedback={this.countTotalFeedback}
      />
    );
  }
}

export default App;
