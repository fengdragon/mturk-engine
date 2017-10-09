import * as React from 'react';
import { connect } from 'react-redux';
import { Card, TextContainer, TextStyle } from '@shopify/polaris';
import { EditableText } from '@blueprintjs/core';
import { RootState, AccountInfo } from '../../types';
import { calculateThreshold } from '../../utils/hitDatabase';

export interface Props {
  readonly numPending: number;
  readonly numSubmitted: number;
  readonly numRejected: number;
}

export interface State {
  readonly minimumRate: number;
}

class RejectionThreshold extends React.PureComponent<Props, State> {
  state: State = { minimumRate: 95 };

  static validateInbounds = (value: string) => {
    const num = parseFloat(value);
    return num >= 0 && num <= 100;
  };

  static validateNumber = (value: string): boolean => /^\d+$/.test(value);

  static validateInput = (value: string) => {
    const { validateInbounds, validateNumber } = RejectionThreshold;
    return (validateInbounds(value) && validateNumber(value)) || value === '';
  };

  private onChange = (value: string) => {
    if (RejectionThreshold.validateInput(value)) {
      this.setState((): Partial<State> => ({
        minimumRate: parseFloat(value) || 0
      }));
    }
  };

  public render() {
    const { numPending, numSubmitted } = this.props;
    const { minimumRate } = this.state;

    return (
      <Card title="Approval Rate Calculator">
        <Card.Section>
          Enter a minimum acceptance rate: {' '}
          <EditableText
            intent={0}
            maxLength={3}
            value={minimumRate.toString()}
            selectAllOnFocus
            onChange={this.onChange}
          />
        </Card.Section>
        <Card.Section>
          <TextContainer>
            To stay above {minimumRate}% acceptance rate, you can receive {' '}
            {calculateThreshold(numSubmitted, minimumRate)} more rejections. You
            currently have{' '}
            <TextStyle variation="strong">{numPending}</TextStyle> HITs pending
          </TextContainer>
        </Card.Section>
      </Card>
    );
  }
}

const mapState = (state: RootState): Props => ({
  numPending: (state.account as AccountInfo).numPending,
  numRejected: (state.account as AccountInfo).lifetimeRejected,
  numSubmitted: (state.account as AccountInfo).lifetimeSubmitted
});

export default connect(mapState)(RejectionThreshold);