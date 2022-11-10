import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul className="statistic__list">
      <li className={css.statistic__item}>
        Good
        <span>:{good}</span>
      </li>
      <li className={css.statistic__item}>
        Neutral
        <span>:{neutral}</span>
      </li>
      <li className={css.statistic__item}>
        Bad
        <span>:{bad}</span>
      </li>
      <li className={css.statistic__item}>
        Total
        <span>:{total}</span>
      </li>
      <li className={css.statistic__item}>
        Positive feedback:<span>{positivePercentage}%</span>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
};
