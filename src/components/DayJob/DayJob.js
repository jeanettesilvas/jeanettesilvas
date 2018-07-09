import React from 'react';

import homeaway from '../../images/homeaway.svg';

import { JobTimePeriod } from '../';
import './DayJob.css';

export function DayJob() {
    return (
        <section className="day-job">
            <h2 className="day-job__title">{'Day job'}</h2>

            <div className="day-job__background">
                <div className="day-job__content">
                    <img
                        className="day-job__ha"
                        src={homeaway}
                        alt="HomeAway"
                    />

                    <div className="day-job__job-title">
                        {'Senior Software Developer'}
                    </div>

                    <JobTimePeriod />
                </div>
            </div>
        </section>
    );
}
