import React from 'react';
import PropTypes from 'prop-types';

export function Code(props) {
    return (
        <svg
            className={props.className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
        >
            <path d="M190.4 354.1L91.9 256l98.4-98.1-30-29.9L32 256l128.4 128 30-29.9zm131.2 0L420 256l-98.4-98.1 30-29.9L480 256 351.6 384l-30-29.9z" />
        </svg>
    );
}

Code.propTypes = {
    className: PropTypes.string,
};