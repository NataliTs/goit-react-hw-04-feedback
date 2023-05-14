import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateState = name => {
    this.setState(prevState => {
      let objPrevState = { ...prevState };
      objPrevState[name] = prevState[name] + 1;
      return objPrevState;
    });
  };

  totalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  positivePercentageCount = () => {
    const { good, neutral, bad } = this.state;
    return Math.floor((good / (good + neutral + bad)) * 100 || 0);
  };

  render() {
    return (
      <Layout>
        <GlobalStyle />
        <Section title="Please leave feedback !!!">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.updateState}
          />
        </Section>
        <Section title="Statictics">
          {this.totalFeedback() === 0 ? (
            <Notification message="There is no feedback yet" />
          ) : (
            <Statistics
              options={Object.keys(this.state)}
              statistics={this.state}
              total={this.totalFeedback()}
              positivePercentage={this.positivePercentageCount()}
            />
          )}
        </Section>
      </Layout>
    );
  }
}
