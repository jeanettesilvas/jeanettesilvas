import React from 'react';
import { shallow } from 'enzyme';
import { JobTimePeriod } from './JobTimePeriod';
import renderer from 'react-test-renderer';

describe('<JobTimePeriod />', () => {
    let props;

    beforeEach(() => {
        props = {
            dateRange: '2018',
            highlightedText: 'a',
            summary: 'summary text',
            tags: ['react', 'foo'],
            teamName: 'team',
        };
    });

    describe('#render', () => {
        it('renders correctly', () => {
            const tree = renderer.create(<JobTimePeriod {...props} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders without crashing', () => {
            const wrapper = shallow(<JobTimePeriod {...props} />);
            expect(wrapper.find('.job-time-period').length).toEqual(1);
        });
    });
});
