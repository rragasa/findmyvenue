import App from '../src/App';

describe('App Component', () => {
  it('should render the app component', () => {
      let wrapper = shallow(<App />);
      expect(wrapper).toMatchSnapshot();
  });
});