import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Tag } from '../';

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
        let highlighted = false;

        tags.sort();

        tagListItems = tags.map((tag, index) => {
            highlighted = highlightedText
                ? tag.includes(highlightedText)
                : false;

            return (
                <Tag
                    highlighted={highlighted}
                    text={tag}
                    key={`tag-${index}`}
                />
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
