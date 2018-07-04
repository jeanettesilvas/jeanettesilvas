import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faEtsy,
    faGithub,
    faInstagram,
    faLinkedinIn,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';

export class FontAwesomeLinkedIcon extends Component {
    static propTypes = {
        icon: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
    };

    icons = {
        etsy: faEtsy,
        github: faGithub,
        instagram: faInstagram,
        linkedin: faLinkedinIn,
        twitter: faTwitter,
    };

    render() {
        return (
            <a
                href={this.props.url}
                className="social__link"
                rel="noopener noreferrer"
                target="_blank"
            >
                <FontAwesomeIcon
                    icon={this.icons[this.props.icon]}
                    className="social__icon"
                />
            </a>
        );
    }
}
