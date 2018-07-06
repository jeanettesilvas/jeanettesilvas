import React, { Component } from 'react';

import './Portfolio.css';
import { Code } from '../../icons';
import { Social } from '../Social/Social';

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
                    {/* <h3 className="portfolio__location">
                        <Pin className="portfolio__location-pin" />
                        {'Bothell, WA'}
                    </h3> */}
                </section>

                <section className="portfolio__hello">
                    <h2 className="portfolio__hello-title">
                        {'hello'}
                        <span className="portfolio__hello-period">{'.'}</span>
                    </h2>

                    <p className="portfolio__hello-p">
                        {
                            'My web dev career started out writing Java but I quickly became focused on frontend work. I love making interfaces that are enjoyable to use and look great. I’ve done some design work but I prefer working with great designers to help implement their vision.'
                        }
                    </p>
                    <p className="portfolio__hello-p">
                        {
                            'While I’ve worked with different languages and frameworks, I’m currently working with React both for work and for personal use. I spend a lot of my off time making goofy pop culture stuff out of yarn and have started combining my day and night jobs with some in-progress projects I hope to reveal within the year.'
                        }
                    </p>
                </section>

                <Social />
            </div>
        );
    }
}
