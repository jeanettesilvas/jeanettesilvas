import React from 'react';

import './Hello.css';

export function Hello() {
    return (
        <section className="hello">
            <h2 className="hello__title">
                <span className="hello__letter hello__h">{'h'}</span>
                <span className="hello__letter hello__e">{'e'}</span>
                <span className="hello__letter hello__l">{'l'}</span>
                <span className="hello__letter hello__l-2">{'l'}</span>
                <span className="hello__letter hello__o">{'o'}</span>
                <span className="hello__letter hello__period">{'.'}</span>
            </h2>

            <p className="hello__p">
                {
                    'My web dev career started out writing Java but I quickly became focused on frontend work. I love making interfaces that are enjoyable to use and look great. I’ve done some design work but I prefer working with great designers to help implement their vision.'
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
