import clsx from 'clsx';
import s from './Options.module.css';

const Options = ({ onLeaveFeedback, onResetFeedback, totalFeedback }) => (
  <div className={s.wrapper}>
    <button
      className={clsx(s.btn, s.good)}
      onClick={() => onLeaveFeedback('good')}
    >
      Good
    </button>
    <button
      className={clsx(s.btn, s.neutral)}
      onClick={() => onLeaveFeedback('neutral')}
    >
      Neutral
    </button>
    <button
      className={clsx(s.btn, s.bad)}
      onClick={() => onLeaveFeedback('bad')}
    >
      Bad
    </button>
    {totalFeedback > 0 && (
      <button className={clsx(s.btn)} onClick={onResetFeedback}>
        Reset
      </button>
    )}
  </div>
);

export default Options;
