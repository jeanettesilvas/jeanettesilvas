import React from 'react';

import { getText } from '../../data/text';
import dropstitch from '../../images/drop-stitch.svg';
import dropstitchscreenshot from '../../images/drop-stitch-screenshot.png';
import dropstitchtagline from '../../images/drop-stitch-tagline.svg';

import './DropStitch.css';

export function DropStitch() {
    let text = getText();
    return (
        <section className="drop-stitch">
            <h2 className="section-title">{text.wip}</h2>
            <h3 className="section-title-footnote">{text.slowly}</h3>

            <div className="drop-stitch__content">
                <div className="drop-stitch__content-left">
                    <img
                        className="drop-stitch__img"
                        src={dropstitch}
                        alt="Drop Stitch"
                    />
                    <img
                        className="drop-stitch__img"
                        src={dropstitchtagline}
                        alt="An easier way to follow craft patterns"
                    />

                    <p>
                        {
                            'This is my dream project. It is slow going but I try to chip away at it daily. It is also a React project but the rest of the stack is still to be determined. I look forward to learning the things that will be needed beyond the front end.'
                        }
                    </p>
                </div>
                <div className="drop-stitch__content-right">
                    <img
                        className="drop-stitch__screenshot"
                        src={dropstitchscreenshot}
                        alt=""
                        width="300"
                    />
                </div>
            </div>
        </section>
    );
}
