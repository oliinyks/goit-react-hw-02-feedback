import React from 'react';
import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statistics';
import css from './App.module.css';

class App extends React.Component{
	state = {
		visible: false,
		good: 0,
		neutral: 0,
		bad: 0,
	 };
  
	 show = () => {
		this.setState({ visible: true });
	 };
  
	 onLeaveFeedback = option => {
		this.setState(prevState => ({ [option]: prevState[option] + 1 }));
		this.show();
	 };
  
	 render() {
		const { visible, good, neutral, bad } = this.state;
  
		const total = good + neutral + bad;
		const positivePercentage = Number.parseInt((good / total) * 100);
  
		return (
		  <section className={css.feedback}>
			 <h1 className={css.title}>Our reviews</h1>
			 <p className={css.text}>
				{visible ? 'Thanks for your choice' : 'Please leave feedback'}
			 </p>
			 <FeedbackOptions
				onLeaveFeedback={this.onLeaveFeedback}
				options={['good', 'neutral', 'bad']}
			 />
  
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
};
export default App;