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
                    <span className="projects__title-note">{'by team'}</span>
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
                                {'Guest selector module'}
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
                                {'Property Details Page'}
                            </dd>
                            <dt className="projects__term">{'project'}</dt>
                            <dd className="projects__definition">
                                {'Mobile quote flow'}
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
                                {'Search Results Page'}
                            </dd>
                            <dt className="projects__term">{'project'}</dt>
                            <dd className="projects__definition">
                                {'Search hit module'}
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

            <div className="projects__experiments">
                <h1 className="projects__title">{'A/B tests'}</h1>

                <ul>
                    <li>{'map size and location'}</li>
                    <li>{'search filter types and location in list'}</li>
                    <li>{'use of superlatives'}</li>
                    <li>{'tab order'}</li>
                    <li>{'price display'}</li>
                    <li>{'amount of content in quote'}</li>
                    <li>{'book button label'}</li>
                    <li>{'inquiry button label'}</li>
                    <li>{'mobile search box'}</li>
                    <li>{'automatic display of property overview'}</li>
                    <li>{'button colors'}</li>
                    <li>{'owner score'}</li>
                    <li>{'... and more'}</li>
                </ul>
            </div>
        </div>
    );
}
