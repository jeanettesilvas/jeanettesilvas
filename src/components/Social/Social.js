import React, { Component } from 'react';

import './Social.css';
import { FontAwesomeLinkedIcon } from '../';
import { data } from '../../data/data';

export class Social extends Component {
    get links() {
        let links = data.social.map((link, index) => {
            return (
                <li className="social__account" key={`${link.brand}-${index}`}>
                    <FontAwesomeLinkedIcon url={link.url} icon={link.brand} />
                </li>
            );
        });

        return links;
    }

    render() {
        return <ul className="social">{this.links}</ul>;
    }
}
