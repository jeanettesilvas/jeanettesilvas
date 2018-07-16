import React, { Component } from 'react';

import './Portfolio.css';
import { Code } from '../../icons';
import { DayJob, DropStitch, Hello, NorthwestStitch, Social } from '../';

import { getText } from '../../data/text';

export class Portfolio extends Component {
    text = getText();

    render() {
        let text = this.text;
        return (
            <div className="portfolio">
                <section className="portfolio__basics">
                    <h1 className="portfolio__logo">{text.name}</h1>
                    <h2 className="portfolio__job-title">
                        {text.generalJobTitle}
                    </h2>
                    <h2 className="portfolio__hobby-title">
                        &amp; {text.maker}
                    </h2>
                    <Code className="portfolio__logo-icon" />
                </section>

                <Hello />
                <DayJob />
                <NorthwestStitch />
                <DropStitch />
                <Social />
            </div>
        );
    }
}
