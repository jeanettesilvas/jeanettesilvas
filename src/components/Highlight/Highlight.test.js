import React from 'react';
import { shallow } from 'enzyme';
import { Highlight } from './Highlight';

it('renders without crashing', () => {
    const wrapper = shallow(<Highlight />);
    expect(wrapper.find('.highlight').length).toEqual(1);
});
