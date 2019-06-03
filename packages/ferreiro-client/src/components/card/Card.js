import React from 'react'
import {Link} from 'react-router-dom'
import LazyLoad from 'react-lazy-load'

// import {Link} from '../atoms/link/Link'

import './Card.scss'
const DEFAULT_MAX_SUMMARY_LENGTH = 150

export const Card = ({
    permalink,
    title,
    summary = '',
    maxSummaryLength = DEFAULT_MAX_SUMMARY_LENGTH,
    image,
}) => {
    const summaryShortened = summary.substr(0, maxSummaryLength)

    return (
        <Link
            to={permalink}
        >
            <div className="card">
                <div className="card__image">
                    <LazyLoad debounce={false}>
                        <img src={image} alt={title} />
                    </LazyLoad>
                </div>
                <div className="card__content">
                    <h2 className="card__title">
                        {title}
                    </h2>
                    <p className="card__summary">
                        {summaryShortened}
                    </p>
                </div>
            </div>
        </Link>
    )
}