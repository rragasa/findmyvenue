import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import App from '../src/App';
import application from '../src/utils/actions/appActions';

const mockedStore = configureStore();

describe('App Component', () => {
  const store = mockedStore({
    application,
  });
  it('should render the app component', () => {
    store.dispatch = jest.fn();
    const wrapper = shallow(<App store={store} />);
    expect(wrapper).toMatchSnapshot();
  });
});
