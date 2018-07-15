import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './Highlight.css';

export class Highlight extends Component {
    render() {
        return (
            <div className="highlight">
                <input
                    className="highlight__input"
                    placeholder="highlight"
                    type="text"
                />

                <FontAwesomeIcon className="highlight__icon" icon={faSearch} />
            </div>
        );
    }
}
