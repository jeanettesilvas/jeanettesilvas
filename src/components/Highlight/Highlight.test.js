import React from 'react';
import { shallow } from 'enzyme';
import { Highlight } from './Highlight';
import renderer from 'react-test-renderer';

describe('#render', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<Highlight />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders without crashing', () => {
        const wrapper = shallow(<Highlight />);
        expect(wrapper.find('.highlight').length).toEqual(1);
    });

    it('hides the clear button when the input field is empty', () => {
        const wrapper = shallow(<Highlight />);

        expect(wrapper.find('.highlight__icon--clear.hidden').length).toEqual(
            1
        );

        expect(wrapper.find('.highlight__icon--search.hidden').length).toEqual(
            0
        );
    });

    it('hides the search icon when the input field is not empty', () => {
        const wrapper = shallow(<Highlight />);
        wrapper
            .find('.highlight__input')
            .simulate('change', { target: { value: 'asdf' } });

        expect(wrapper.find('.highlight__icon--clear.hidden').length).toEqual(
            0
        );

        expect(wrapper.find('.highlight__icon--search.hidden').length).toEqual(
            1
        );
    });
});
