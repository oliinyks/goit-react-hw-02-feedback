import React from 'react';
import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statistics';
import css from './feedback.module.css';

class Feedback extends React.Component {
  state = {
    visible: false,
    good: 0,
    neutral: 0,
    bad: 0,
  };

  show = () => {
    this.setState({ visible: true });
  };

  onLeaveFeedback = e => {
    const currentState = e.target.name;
	  // eslint-disable-next-line
    switch (currentState) {
      case 'good':
        this.setState(prevState => ({ good: prevState.good + 1 }));
        break;
      case 'neutral':
        this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
        break;
      case 'bad':
        this.setState(prevState => ({ bad: prevState.bad + 1 }));
        break;
    }
    this.show();
  };

  render() {
    const { visible } = this.state;
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;

    const total = good + neutral + bad;
    const positivePercentage = Number.parseInt((good / total) * 100);

    return (
      <section className={css.feedback}>
        <h1 className={css.title}>Our reviews</h1>
        <p className={css.text}>
          {visible ? 'Thanks for your choice' : 'Please leave feedback'}
        </p>
        <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />

        {visible && (
          <>
            <h2 className={css.statisticsTitle}>Statistics</h2>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          </>
        )}
      </section>
    );
  }
}
export default Feedback;
