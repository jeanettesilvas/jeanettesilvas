import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Home.scss'

export const Home = () => {
  return (
    <div className="home">
      <h1 className="home__title">Jeanette Silvas</h1>
      <h2 className="home__job-title">Front End Software Engineer</h2>
      <ul className="home__links">
        <li>
          <a
            href="https://linkedin.com/in/jeanettesilvas"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              className="fa-lg home__brand-icon home__brand-icon--linkedin"
              icon={['fab', 'linkedin-in']}
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/jeanettesilvas"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              className="fa-lg home__brand-icon home__brand-icon--github"
              icon={['fab', 'github']}
            />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/jeanettesilvas"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              className="fa-lg home__brand-icon home__brand-icon--twitter"
              icon={['fab', 'twitter']}
            />
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/northweststitch"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              className="fa-lg home__brand-icon home__brand-icon--instagram"
              icon={['fab', 'instagram']}
            />
          </a>
        </li>
      </ul>
    </div>
  )
}
