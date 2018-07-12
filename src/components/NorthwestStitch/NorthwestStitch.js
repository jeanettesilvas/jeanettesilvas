import React from 'react';

import northweststitch from '../../images/northwest-stitch.svg';
import icebear from '../../images/ice-bear.jpg';
import chewie from '../../images/chewie.jpg';
import mage from '../../images/mage.jpg';
import bearstack from '../../images/bear-stack.jpg';

import './NorthwestStitch.css';

export function NorthwestStitch() {
    return (
        <section className="northwest-stitch">
            <h2 className="section-title">{'For fun'}</h2>

            <div className="northwest-stitch__sections">
                <div className="northwest-stitch__section northwest-stitch__section--with-padding">
                    <img
                        src={northweststitch}
                        className="northwest-stitch__logo"
                        alt="Northwest Stitch"
                    />

                    <p>
                        {
                            'A lot of my spare time is spent making amigurumi, which is Japanese for crocheted or knitted stuffed animals. I started showing what I make on Instagram then soon after started selling them on Etsy.'
                        }
                    </p>
                    <p>
                        {
                            'Now I’m working on a site to teach others the tricks of the trade. I’m building it off create-react-app and hoping to have it open to the public before the end of 2018.'
                        }
                    </p>
                </div>

                <div className="northwest-stitch__section">
                    <ul className="northwest-stitch__images">
                        <li className="northwest-stitch__image-container">
                            <img
                                className="northwest-stitch__image"
                                src={icebear}
                                alt="Ice Bear"
                                width="165"
                            />
                        </li>
                        <li className="northwest-stitch__image-container">
                            <img
                                className="northwest-stitch__image"
                                src={chewie}
                                alt="Chewbacca"
                                width="165"
                            />
                        </li>
                        <li className="northwest-stitch__image-container">
                            <img
                                className="northwest-stitch__image"
                                src={mage}
                                alt="Final Fantasy Black Mage"
                                width="165"
                            />
                        </li>
                        <li className="northwest-stitch__image-container">
                            <img
                                className="northwest-stitch__image"
                                src={bearstack}
                                alt="We Bare Bears Bear Stack"
                                width="165"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
