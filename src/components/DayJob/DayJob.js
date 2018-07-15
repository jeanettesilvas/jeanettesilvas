import React, { Component } from 'react';

import homeaway from '../../images/homeaway.svg';

import { Highlight, JobTimePeriod } from '../';
import './DayJob.css';
import { data, getText } from '../../data';

export class DayJob extends Component {
    text = getText();

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
                <h2 className="day-job__title section-title">
                    {this.text.dayJobTitle}
                </h2>

                <div className="day-job__background">
                    <div className="day-job__content">
                        <div className="day-job__header">
                            <div className="day-job__title">
                                <a
                                    href="https://www.homeaway.com"
                                    target="blank"
                                >
                                    <img
                                        className="day-job__ha"
                                        src={homeaway}
                                        alt="HomeAway"
                                    />
                                </a>

                                <div className="day-job__job-title">
                                    {this.text.homeawayJobTitle}
                                </div>
                            </div>

                            <Highlight />
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
