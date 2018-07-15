import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { getText } from '../../data';

import './Highlight.css';

export class Highlight extends Component {
    static propTypes = {
        onChange: PropTypes.func,
    };

    static defaultProps = {
        onChange: () => {},
    };

    state = {
        value: '',
    };

    text = getText();

    handleKeyPress = event => {
        if (event.which === 27) {
            let value = '';
            this.setState({ value });
            this.props.onChange(value);
        }
    };

    handleOnChange = event => {
        let value = event.target.value;
        this.setState({ value });
        this.props.onChange(value);
    };

    render() {
        return (
            <div className="highlight">
                <input
                    className="highlight__input"
                    onChange={this.handleOnChange.bind(this)}
                    onKeyDown={this.handleKeyPress.bind(this)}
                    placeholder={this.text.highlight}
                    type="text"
                    value={this.state.value}
                />

                <FontAwesomeIcon className="highlight__icon" icon={faSearch} />
            </div>
        );
    }
}
