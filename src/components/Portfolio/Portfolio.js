import React, { Component } from 'react';

import './Portfolio.css';
import { Code } from '../../icons';
import { DayJob, Hello, NorthwestStitch, Social } from '../';

import { getText } from '../../data/text';

export class Portfolio extends Component {
    text = getText();

    render() {
        return (
            <div className="portfolio">
                <section className="portfolio__basics">
                    <h1 className="portfolio__logo">{'Jeanette Silvas'}</h1>
                    <h2 className="portfolio__job-title">
                        {this.text['current-job-title']}
                    </h2>
                    <h2 className="portfolio__hobby-title">&amp; {'maker'}</h2>
                    <Code className="portfolio__logo-icon" />
                </section>

                <Hello />
                <DayJob />
                <NorthwestStitch />
                <Social />
            </div>
        );
    }
}
