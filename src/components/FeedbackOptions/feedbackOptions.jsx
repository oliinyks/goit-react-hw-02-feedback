import React from 'react';
import css from './feedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback }) => (
  <div className={css.buttons}>
    <button
      className={css.button}
      type="button"
      name="good"
      onClick={onLeaveFeedback}
    >
      Good
    </button>
    <button
      className={css.button}
      type="button"
      name="neutral"
      onClick={onLeaveFeedback}
    >
      Neutral
    </button>
    <button
      className={css.button}
      type="button"
      name="bad"
      onClick={onLeaveFeedback}
    >
      Bad
    </button>
  </div>
);

export default FeedbackOptions;
