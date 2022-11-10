import React from 'react';
import PropTypes from 'prop-types';
import css from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <div className={css.feedbackFrom}>
      <h2 className={css.feedbackFrom__title}>{title}</h2>
      {children}
    </div>
  );
};

Section.protoTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
