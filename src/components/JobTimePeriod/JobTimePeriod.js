import React from 'react';

import './JobTimePeriod.css';

export function JobTimePeriod() {
    return (
        <section className="job-time-period">
            <h3 className="job-time-period__date-range">{'2018'}</h3>
            <h1 className="job-time-period__team">{'Stay Experience'}</h1>
            <p className="job-time-period__description">
                {
                    'Currently working on revamping the emails for travelers who have requested a reservation through to their stay at the property.'
                }
            </p>

            <h5 className="job-time-period__tools-title">{'Tools'}</h5>

            <ul className="job-time-period__tools">
                <li className="job-time-period__tool">{'react'}</li>
                <li className="job-time-period__tool">{'less'}</li>
                <li className="job-time-period__tool">{'litmus'}</li>
                <li className="job-time-period__tool">{'html emails'}</li>
                <li className="job-time-period__tool">{'sketch'}</li>
                <li className="job-time-period__tool">{'mocha'}</li>
                <li className="job-time-period__tool">{'chai'}</li>
                <li className="job-time-period__tool">{'enzyme'}</li>
            </ul>
        </section>
    );
}
