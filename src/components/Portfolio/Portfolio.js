import React, { Component } from 'react';

import './Portfolio.css';
import { Code, Pin } from '../../icons';
// import homeaway from '../../images/homeaway.svg';

export class Portfolio extends Component {
    render() {
        return (
            <div className="portfolio">
                <div className="portfolio__basics">
                    <h1 className="portfolio__logo">
                        <Code className="portfolio__logo-icon" />
                        {'Jeanette Silvas'}
                    </h1>
                    <h2 className="portfolio__job-title">
                        {'frontend developer'}
                    </h2>
                    <h3 className="portfolio__location">
                        <Pin className="portfolio__location-pin" />
                        <span>{'Bothell, WA'}</span>
                    </h3>
                </div>

                {/* <div className="portfolio__current">
                    <img src={homeaway} alt="" width="300" height="100" />
                </div> */}
            </div>
        );
    }
}
