import React from 'react';
import { shallow } from 'enzyme';
import { DayJob } from './DayJob';
import renderer from 'react-test-renderer';

describe('<DayJob />', () => {
    describe('#handleHighlightChange', () => {
        it('sets the state', () => {
            const instance = shallow(<DayJob />).instance();
            instance.handleHighlightChange('asdf');
            expect(instance.state.highlightedText).toEqual('asdf');
        });
    });

    describe('#render', () => {
        it('renders correctly', () => {
            const tree = renderer.create(<DayJob />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders without crashing', () => {
            const wrapper = shallow(<DayJob />);
            expect(wrapper.find('.day-job').length).toEqual(1);
        });
    });
});
