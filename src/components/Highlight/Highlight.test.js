import React from 'react';
import { shallow } from 'enzyme';
import { Highlight } from './Highlight';
import renderer from 'react-test-renderer';
import sinon from 'sinon';

describe('<Highlight />', () => {
    describe('#handleKeyDown', () => {
        it('calls clear if the keyCode is 27', () => {
            const instance = shallow(<Highlight />).instance();
            var stub = sinon.stub(instance, 'clear');
            instance.handleKeyDown({ keyCode: 27 });
            sinon.assert.calledOnce(stub);
            stub.restore();
        });

        it('does not call clear if the keyCode is not 27', () => {
            const instance = shallow(<Highlight />).instance();
            var stub = sinon.stub(instance, 'clear');
            instance.handleKeyDown({ keyCode: 30 });
            sinon.assert.notCalled(stub);
            stub.restore();
        });
    });

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

            expect(
                wrapper.find('.highlight__icon--clear.hidden').length
            ).toEqual(1);

            expect(
                wrapper.find('.highlight__icon--search.hidden').length
            ).toEqual(0);
        });

        it('hides the search icon when the input field is not empty', () => {
            const wrapper = shallow(<Highlight />);
            wrapper
                .find('.highlight__input')
                .simulate('change', { target: { value: 'asdf' } });

            expect(
                wrapper.find('.highlight__icon--clear.hidden').length
            ).toEqual(0);

            expect(
                wrapper.find('.highlight__icon--search.hidden').length
            ).toEqual(1);
        });

        it('clears the field when clicking the clear button', () => {
            const wrapper = shallow(<Highlight />);
            wrapper
                .find('.highlight__input')
                .simulate('change', { target: { value: 'asdf' } });

            wrapper.find('.highlight__icon--clear').simulate('click');

            expect(wrapper.find('.highlight__input').text()).toEqual('');
        });
    });
});
