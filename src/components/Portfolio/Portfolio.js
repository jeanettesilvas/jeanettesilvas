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
                    <h1 className="portfolio__logo">{this.text.name}</h1>
                    <h2 className="portfolio__job-title">
                        {this.text.currentJobTitle}
                    </h2>
                    <h2 className="portfolio__hobby-title">
                        &amp; {this.text.maker}
                    </h2>
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
