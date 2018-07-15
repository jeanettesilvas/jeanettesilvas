import React, { Component } from 'react';
import classnames from 'classnames';

import { getText } from '../../data/text';
import './Hello.css';

export class Hello extends Component {
    get title() {
        let title = this.text.helloTitle.split('');
        let delay = 0.5;
        let style;

        let letters = title.map((letter, index) => {
            let className = classnames('hello__letter', `hello__${index}`, {
                hello__period: letter === '.',
            });

            delay = delay + 0.07;

            style = {
                animationDelay: `${delay}s`,
            };

            return (
                <span
                    style={style}
                    key={`letter-${index}`}
                    className={className}
                >
                    {letter}
                </span>
            );
        });

        return letters;
    }

    text = getText();

    render() {
        return (
            <section className="hello">
                <h2 className="hello__title">{this.title}</h2>

                <p className="hello__p">
                    {
                        'My web dev career started out writing Java but I quickly became focused on front end work. I love making interfaces that are enjoyable to use and look great. I’ve done some design work but I prefer working with great designers to help implement their vision.'
                    }
                </p>
                <p className="hello__p">
                    {
                        'While I’ve worked with different languages and frameworks, I’m currently working with React both for work and for personal use. I spend a lot of my off time making goofy pop culture stuff out of yarn and have started two web projects I hope to reveal over the next year.'
                    }
                </p>
            </section>
        );
    }
}
