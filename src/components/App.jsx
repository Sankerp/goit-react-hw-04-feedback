import { Component } from 'react';
import Buttons from './Buttons/Buttons';
import Statistics from './Statistics/Statistics';
import Notification from './Statistics/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clickFeedback = e => {
    this.setState(prevState => ({
      [e.target.name]: prevState[e.target.name] + 1,
    }));
  };

  totalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  positivePercentage = () => {
    return this.totalFeedback()
      ? Number.parseInt((this.state.good / this.totalFeedback()) * 100) + '%'
      : null;
  };

  render() {
    const options = Object.keys(this.state);
    const total = this.totalFeedback();
    return (
      <div className="container">
        <Buttons clickFeedback={this.clickFeedback} options={options} />
        {Boolean(total) ? (
          <Statistics
            state={this.state}
            total={this.totalFeedback()}
            positivePercentage={this.positivePercentage()}
          />
        ) : (
          <Notification />
        )}
      </div>
    );
  }
}
