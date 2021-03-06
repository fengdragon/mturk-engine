import * as React from 'react';
import { connect } from 'react-redux';
import { ProgressBar, Intent, Classes } from '@blueprintjs/core';
import { RootState } from '../../types';
import { todaysProjectedEarnings } from '../../selectors/hitDatabase';

export interface Props {
  readonly dailyEarningsGoal: number;
  readonly todaysEarnings: number;
}

class DailyEarningsProgressBar extends React.PureComponent<Props, never> {
  private static calculateProgress = (value: number, goal: number) =>
    value / goal;

  public render() {
    const { dailyEarningsGoal, todaysEarnings } = this.props;
    return (
      <ProgressBar
        className={`${Classes.PROGRESS_NO_STRIPES} ${
          Classes.PROGRESS_NO_ANIMATION
        }`}
        value={DailyEarningsProgressBar.calculateProgress(
          todaysEarnings,
          dailyEarningsGoal
        )}
        intent={Intent.SUCCESS}
      />
    );
  }
}

const mapState = (state: RootState): Props => ({
  dailyEarningsGoal: state.dailyEarningsGoal,
  todaysEarnings: todaysProjectedEarnings(state)
});

export default connect(mapState)(DailyEarningsProgressBar);
