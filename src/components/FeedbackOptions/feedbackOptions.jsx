import React from 'react';
import PropTypes from 'prop-types';
import css from './feedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <div className={css.buttons}>
    {options.map((option, id) => (
      <button
        key={id}
        className={css.button}
        type="button"
        name={option}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
	options: PropTypes.arrayOf(PropTypes.string.isRequired),
	onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;
