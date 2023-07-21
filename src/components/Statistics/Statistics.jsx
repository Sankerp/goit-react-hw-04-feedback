import Sections from 'components/Sections/Sections';
import PropTypes from 'prop-types';

const Statistics = ({ state, total, positivePercentage }) => {
  return (
    <Sections title="Statistics">
      <ul>
        <li>
          <p>Good: </p>
          <span>{state.good}</span>
        </li>
        <li>
          <p>Neutral: </p>
          <span>{state.neutral}</span>
        </li>
        <li>
          <p>Bad: </p>
          <span>{state.bad}</span>
        </li>
        <li>
          <p>Total: </p>
          <span>{total}</span>
        </li>
        <li>
          <p>Positive feedback: </p>
          <span>{positivePercentage}</span>
        </li>
      </ul>
    </Sections>
  );
};

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
}.isRequired;

export default Statistics;
