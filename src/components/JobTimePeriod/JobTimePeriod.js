import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './JobTimePeriod.css';

export class JobTimePeriod extends Component {
    static propTypes = {
        dateRange: PropTypes.string.isRequired,
        highlightedText: PropTypes.string,
        summary: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
        teamName: PropTypes.string.isRequired,
    };

    static defaultProps = {
        highlightedText: '',
    };

    get tags() {
        let { tags } = this.props;
        let tagListItems;
        let highlightedText = this.props.highlightedText;
        let className;

        tags.sort();
        tagListItems = tags.map((tag, index) => {
            className = 'job-time-period__tag';

            if (highlightedText) {
                className = classnames(className, {
                    'job-time-period__highlighted-tag': tag.includes(
                        highlightedText
                    ),
                });
            }

            return (
                <li className={className} key={`tag-${index}`}>
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
