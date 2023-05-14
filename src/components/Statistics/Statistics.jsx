import PropTypes from 'prop-types';
import { StatItem } from './Statistics.styled';

export const Statistics = ({
  options,
  statistics,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      {options.map((name, i) => (
        <StatItem key={i}>
          {name}: <span>{statistics[name]}</span>
        </StatItem>
      ))}
      <StatItem>Total: {total}</StatItem>
      <StatItem>Postive feedback: {positivePercentage}%</StatItem>
    </div>
  );
};

Statistics.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired,
  statistics: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
