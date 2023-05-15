import { useState } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = optionName => {
    switch (optionName) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const totalFeedback = () => {
    return good + neutral + bad;
  };

  const positivePercentageCount = () => {
    return Math.floor((good / (good + neutral + bad)) * 100 || 0);
  };

  return (
    <Layout>
      <GlobalStyle />
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statictics">
        {totalFeedback() === 0 ? (
          <Notification message="There is no feedback yet" />
        ) : (
          <Statistics
            options={Object.keys({ good, neutral, bad })}
            statistics={{ good, neutral, bad }}
            total={totalFeedback()}
            positivePercentage={positivePercentageCount()}
          />
        )}
      </Section>
    </Layout>
  );
};
