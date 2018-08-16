import React from 'react';

import dashboard from '../../images/dashboard.png';
import guestSelector from '../../images/guest-selector.png';
import mobileQuoteFlow from '../../images/mobile-quote-flow.png';
import searchHit from '../../images/search-hit.png';

import './Projects.css';

export function Projects() {
    return (
        <div className="projects-and-tests">
            <div className="projects">
                <h1 className="projects__title">
                    {'Projects'}
                    {/* <span className="projects__title-note">{'by team'}</span> */}
                </h1>

                <ul className="projects__list">
                    <li className="projects__list-item">
                        <dl className="projects__details">
                            <dt className="projects__term">{'team'}</dt>
                            <dd className="projects__definition">
                                {'Stay Experience'}
                            </dd>
                            <dt className="projects__term">{'project'}</dt>
                            <dd className="projects__definition">
                                {'Email redesign'}
                            </dd>
                            <dt className="projects__term">{'summary'}</dt>
                            <dd className="projects__definition">
                                {
                                    "Currently working on a complete redesign of our traveler emails. This includes both the look of the emails and how they're created."
                                }
                            </dd>
                            <dt className="projects__term">{'tech stack'}</dt>
                            <dd className="projects__definition">
                                {
                                    'React, Redux, Foundation for Emails, Mocha, Chai, Enzyme, Node.js'
                                }
                            </dd>
                        </dl>

                        <div>
                            <img
                                src={dashboard}
                                alt=""
                                width="400"
                                className="projects__image"
                            />
                        </div>
                    </li>

                    <li className="projects__list-item">
                        <dl className="projects__details">
                            <dt className="projects__term">{'team'}</dt>
                            <dd className="projects__definition">
                                {'Property Details Page'}
                            </dd>
                            <dt className="projects__term">{'project'}</dt>
                            <dd className="projects__definition">
                                {'Mobile quote flow'}
                            </dd>
                            <dt className="projects__term">{'summary'}</dt>
                            <dd className="projects__definition">
                                {
                                    'Developed the requested flow for the complicated quote display. Included many different paths that had to be accounted for.'
                                }
                            </dd>
                            <dt className="projects__term">{'tech stack'}</dt>
                            <dd className="projects__definition">
                                {'React, Redux, Enzyme'}
                            </dd>
                        </dl>

                        <div>
                            <img
                                src={mobileQuoteFlow}
                                alt=""
                                width="400"
                                className="projects__image"
                            />
                        </div>
                    </li>

                    <li className="projects__list-item">
                        <dl className="projects__details">
                            <dt className="projects__term">{'team'}</dt>
                            <dd className="projects__definition">
                                {'Property Details Page'}
                            </dd>
                            <dt className="projects__term">{'project'}</dt>
                            <dd className="projects__definition">
                                {'Guest selector module'}
                            </dd>
                            <dt className="projects__term">{'summary'}</dt>
                            <dd className="projects__definition">
                                {
                                    'Created a reusable static assets project to manage the guest selector field and popover display. Included variations and error handling.'
                                }
                            </dd>
                            <dt className="projects__term">{'tech stack'}</dt>
                            <dd className="projects__definition">
                                {'Backbone, jQuery, custom Bootstrap, Jasmine'}
                            </dd>
                        </dl>

                        <div>
                            <img
                                src={guestSelector}
                                alt=""
                                width="400"
                                className="projects__image"
                            />
                        </div>
                    </li>

                    <li className="projects__list-item">
                        <dl className="projects__details">
                            <dt className="projects__term">{'team'}</dt>
                            <dd className="projects__definition">
                                {'Search Results Page'}
                            </dd>
                            <dt className="projects__term">{'project'}</dt>
                            <dd className="projects__definition">
                                {'Search hit module'}
                            </dd>
                            <dt className="projects__term">{'summary'}</dt>
                            <dd className="projects__definition">
                                {
                                    'Created a reusable static assets project to manage the display of one search result, aka "hits". Included variations and error handling.'
                                }
                            </dd>
                            <dt className="projects__term">{'tech stack'}</dt>
                            <dd className="projects__definition">
                                {'Backbone, jQuery, custom Bootstrap, Jasmine'}
                            </dd>
                        </dl>

                        <div>
                            <img
                                src={searchHit}
                                alt=""
                                width="400"
                                className="projects__image"
                            />
                            <span className="projects__image-footnote">
                                {'(current version but same idea)'}
                            </span>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="experiments">
                <h1 className="projects__title">{'A/B tests'}</h1>

                <ul className="experiments__list">
                    <li className="experiments__list-item">
                        {'map size and location'}
                    </li>
                    <li className="experiments__list-item">
                        {'search filter types and location in list'}
                    </li>
                    <li className="experiments__list-item">
                        {'use of superlatives'}
                    </li>
                    <li className="experiments__list-item">{'tab order'}</li>
                    <li className="experiments__list-item">
                        {'price display'}
                    </li>
                    <li className="experiments__list-item">
                        {'amount of content in quote'}
                    </li>
                    <li className="experiments__list-item">
                        {'book button label'}
                    </li>
                    <li className="experiments__list-item">
                        {'inquiry button label'}
                    </li>
                    <li className="experiments__list-item">
                        {'mobile search box'}
                    </li>
                    <li className="experiments__list-item">
                        {'automatic display of property overview'}
                    </li>
                    <li className="experiments__list-item">
                        {'button colors'}
                    </li>
                    <li className="experiments__list-item">{'owner score'}</li>
                    <li className="experiments__list-item">{'... and more'}</li>
                </ul>
            </div>
        </div>
    );
}
