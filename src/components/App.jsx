import { useState } from 'react';
import Buttons from './Buttons/Buttons';
import Statistics from './Statistics/Statistics';
import Notification from './Statistics/Notification';

export const App = () => {
  const [options, setOptions] = useState({
    good: 0,
    bad: 0,
    neutral: 0,
  });

  const clickFeedback = e => {
    setOptions(prevState => ({
      ...prevState,
      [e.target.name]: prevState[e.target.name] + 1,
    }));
  };

  const totalFeedback = () => {
    return options.good + options.neutral + options.bad;
  };
  const total = totalFeedback();

  const positivePercentage = () => {
    return totalFeedback()
      ? Number.parseInt((options.good / totalFeedback()) * 100) + '%'
      : null;
  };
  return (
    <div className="container">
      <Buttons clickFeedback={clickFeedback} options={Object.keys(options)} />
      {Boolean(total) ? (
        <Statistics
          state={options}
          total={totalFeedback()}
          positivePercentage={positivePercentage()}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};
