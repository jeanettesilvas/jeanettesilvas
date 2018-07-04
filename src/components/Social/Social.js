import React, { Component } from 'react';

import './Social.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export class Social extends Component {
    render() {
        return (
            <ul className="social">
                <li>
                    <a
                        href="https://github.com/jeanettesilvas"
                        className="social__link"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <FontAwesomeIcon
                            icon={faGithub}
                            className="social__icon"
                        />
                    </a>
                </li>
            </ul>
        );
    }
}
