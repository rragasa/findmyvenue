import React from 'react';
import { shallow } from 'enzyme';
import SearchBox from '../src/components/SearchBox';

describe('SearchBox Component', () => {
  const props = {
    onSubmit: jest.fn(),
  };

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SearchBox {...props} />);
  });

  it('should render the SearchBox component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call the search button', () => {
    wrapper.find('[aria-label="search"]')
      .simulate('click', { preventDefault: () => {} });
    expect(props.onSubmit).toHaveBeenCalled();
  });
});
