import React from 'react';
import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statistics';
import Section from '../Section';
import css from './App.module.css';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  render() {
    const {good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positivePercentage = Number.parseInt((good / total) * 100);

    return (
      <section className={css.feedback}>
          <h1 className={css.title}>Our reviews</h1>
        <Section title={total !== 0 ? 'Thanks for your choice' : 'Please leave feedback'}>
          <FeedbackOptions
            onLeaveFeedback={this.onLeaveFeedback}
            options={Object.keys(this.state)}
          />
        </Section>
		  
        {total !== 0 && (
          <>
			 <Section title='Statistics'>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
			 </Section>
           
          </>
        )}
      </section>
    );
  }
}
export default App;
