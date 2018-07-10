import React, { Component } from 'react';

import './Portfolio.css';
import { Code } from '../../icons';
import { DayJob, Hello, Social } from '../';

export class Portfolio extends Component {
    render() {
        return (
            <div className="portfolio">
                <section className="portfolio__basics">
                    <h1 className="portfolio__logo">{'Jeanette Silvas'}</h1>
                    <h2 className="portfolio__job-title">
                        {'frontend developer'}
                    </h2>
                    <h2 className="portfolio__hobby-title">&amp; {'maker'}</h2>
                    <Code className="portfolio__logo-icon" />
                </section>

                <Hello />
                <DayJob />
                <Social />
            </div>
        );
    }
}
