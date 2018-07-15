import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Tag.css';

export class Tag extends Component {
    static propTypes = {
        highlighted: PropTypes.bool,
        text: PropTypes.string.isRequired,
    };

    render() {
        let { highlighted, index, text } = this.props;
        let className = classnames('tag', `tag-${index}`, {
            'tag--highlighted': highlighted,
        });

        return <li className={className}>{text}</li>;
    }
}
