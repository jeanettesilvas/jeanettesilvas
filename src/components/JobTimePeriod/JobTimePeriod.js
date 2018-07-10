import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './JobTimePeriod.css';

export class JobTimePeriod extends Component {
    static propTypes = {
        dateRange: PropTypes.string.isRequired,
        summary: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
        teamName: PropTypes.string.isRequired,
    };

    get tags() {
        let { tags } = this.props;
        let tagListItems;

        tagListItems = tags.map((tag, index) => {
            return (
                <li className="job-time-period__tag" key={`tag-${index}`}>
                    {tag}
                </li>
            );
        });

        return tagListItems;
    }

    render() {
        let { dateRange, summary, teamName } = this.props;

        return (
            <section className="job-time-period">
                <h3 className="job-time-period__date-range">{dateRange}</h3>
                <h1 className="job-time-period__team">{teamName}</h1>
                <p className="job-time-period__description">{summary}</p>

                <ul className="job-time-period__tags">{this.tags}</ul>
            </section>
        );
    }
}
