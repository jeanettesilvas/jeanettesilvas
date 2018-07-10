import React, { Component } from 'react';

import homeaway from '../../images/homeaway.svg';

import { JobTimePeriod } from '../';
import './DayJob.css';
import { data } from '../../data/data';

export class DayJob extends Component {
    get timePeriods() {
        let timePeriods;
        let { dayJobTimePeriods } = data;

        timePeriods = dayJobTimePeriods.map(timePeriod => {
            let { dateRange, key, summary, tags, teamName } = timePeriod;

            return (
                <li key={key} className="day-job__time-period">
                    <JobTimePeriod
                        dateRange={dateRange}
                        summary={summary}
                        tags={tags}
                        teamName={teamName}
                    />
                </li>
            );
        });

        return timePeriods;
    }

    render() {
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

                        <ul className="day-job__time-periods">
                            {this.timePeriods}
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}
