import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });
  test('render text input', () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    expect(NumberOfEventsWrapper.find('.event-number-input')).toHaveLength(1);
  });
  test('render default number of events is 32', () => {
    expect(
      NumberOfEventsWrapper.find('.event-number-input').at(0).props().value
    ).toEqual(32);
  });
  test('renders text input correctly', () => {
    const eventValue = NumberOfEventsWrapper.state('eventValue');
    expect(NumberOfEventsWrapper.find('.event-number-input').prop('value')).toBe(eventValue);
});
test('render on change state', () => {
  const eventValue = { target: { value: 6 } };

  NumberOfEventsWrapper.find('.event-number-input').simulate(
    'change',
    eventValue
  );
  expect(NumberOfEventsWrapper.state('eventValue')).toBe(6);
});

});