import s from './Feedback.module.css';
import clsx from 'clsx';

const Feedback = ({ total, positivePercentage, stats }) => (
  <div>
    <h2 className={clsx(s.title)}>Statistics:</h2>
    <p className={clsx(s.stats, s.good)}>Good: {stats.good}</p>
    <p className={clsx(s.stats, s.neutral)}>Neutral: {stats.neutral}</p>
    <p className={clsx(s.stats, s.bad)}>Bad: {stats.bad}</p>
    <p className={clsx(s.stats)}>Total: {total}</p>
    <p className={clsx(s.stats)}>Positive feedback: {positivePercentage}%</p>
  </div>
);

export default Feedback;
