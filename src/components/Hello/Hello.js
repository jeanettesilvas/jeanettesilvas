import React, { Component } from 'react';
import classnames from 'classnames';

import { getText } from '../../data/text';
import './Hello.css';

function getKey(index) {
    let keyPrefix = 'helloParagraph';
    return `${keyPrefix}${index}`;
}

export class Hello extends Component {
    text = getText();

    get paragraphs() {
        let text = this.text;
        let index = 1;
        let key = getKey(index);
        let paragraphs = [];
        let paragraph = text[key];

        while (!!paragraph) {
            paragraphs.push(
                <p key={key} className="hello__p">
                    {paragraph}
                </p>
            );
            index += 1;
            key = getKey(index);
            paragraph = text[key];
        }

        return paragraphs;
    }

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

    render() {
        return (
            <section className="hello">
                <h2 className="hello__title">{this.title}</h2>
                {this.paragraphs}
            </section>
        );
    }
}
