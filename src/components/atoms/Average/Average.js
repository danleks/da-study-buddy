import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './Average.styles';
import { setAverageColor } from 'helpers/setAverageColor';

const Average = ({ average, isBig }) => {
  let averageBackgroundColor = setAverageColor(average);
  return (
    <Wrapper isBig={isBig} bgColor={averageBackgroundColor}>
      <span>{average}</span>
    </Wrapper>
  );
};

Average.propTypes = {
  average: PropTypes.number.isRequired,
};

export default Average;
