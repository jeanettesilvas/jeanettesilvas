import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

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

    clear = () => {
        let value = '';
        this.setState({ value });
        this.props.onChange(value);
    };

    handleClearClick = event => {
        this.clear();
    };

    handleKeyDown = event => {
        if (event.which === 27) {
            this.clear();
        }
    };

    handleOnChange = event => {
        let value = event.target.value;
        this.setState({ value });
        this.props.onChange(value);
    };

    render() {
        let iconClass = 'highlight__icon';
        let searchIconClassName = classnames(
            iconClass,
            'highlight__icon--search',
            {
                hidden: !!this.state.value,
            }
        );

        let clearIconClassName = classnames(
            iconClass,
            'highlight__icon--clear',
            {
                hidden: !this.state.value,
            }
        );

        return (
            <div className="highlight">
                <input
                    className="highlight__input"
                    onChange={this.handleOnChange}
                    onKeyDown={this.handleKeyDown}
                    placeholder={this.text.highlight}
                    type="text"
                    value={this.state.value}
                />

                <FontAwesomeIcon
                    className={searchIconClassName}
                    icon={faSearch}
                />
                <FontAwesomeIcon
                    className={clearIconClassName}
                    icon={faTimes}
                    onClick={this.handleClearClick}
                />
            </div>
        );
    }
}
