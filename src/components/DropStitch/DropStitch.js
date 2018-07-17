import React from 'react';

import { getText } from '../../data/text';
import dropstitch from '../../images/drop-stitch.svg';
import dropstitchscreenshot from '../../images/drop-stitch-screenshot.png';

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
                    {/* <img
                        className="drop-stitch__img"
                        src={dropstitchtagline}
                        alt="An easier way to follow craft patterns"
                    /> */}
                    <h4 className="drop-stitch__tagline">
                        {'An easier way to follow craft patterns'}
                    </h4>

                    <p>{text.dropStitchDescription}</p>
                </div>
                <div className="drop-stitch__content-right">
                    <img
                        className="drop-stitch__screenshot"
                        src={dropstitchscreenshot}
                        alt=""
                        width="280"
                    />
                </div>
            </div>
        </section>
    );
}
