import React, { Suspense } from 'react'
import * as R from 'ramda'
import classnames from "classnames";
import Button, { BUTTON_TYPES } from './Button';
import ImageLoader from './ImageLoader';

import '../styles/common/Card.scss'
import Loader from './Loader';

export const CARD_TYPES = {
    IMAGE_ONLY: 'IMAGE_ONLY',
    TITLE: 'TITLE',
}

const Card = ({ classNames, icon, iconOnClick, id, imgSrc, line1, line2, onClick, type, }) =>
    <div
        className={classnames(
            'card',
            classNames,
            { 'image-only': R.equals(CARD_TYPES.IMAGE_ONLY, type) },
            { 'clickable': onClick },
        )}
        id={id}
        onClick={onClick}
    >
        <div className="card-image-container">
            <img alt="gallery" className="card-image" src={imgSrc} />
            {/* <Suspense fallback={<Loader />}>
                <ImageLoader classNames="card-image" src={imgSrc} />
            </Suspense> */}
        </div>
        {
            R.equals(CARD_TYPES.TITLE, type) &&
            <div className="card-title">
                <div className="title">
                    <div className="line first">{line1}</div>
                    <div className="line second">{line2}</div>
                </div>
                <Button
                    classNames="card-icon"
                    icon={icon}
                    onClick={iconOnClick}
                    type={BUTTON_TYPES.ICON}
                />
            </div>
        }
    </div>

Card.defaultProps = {
    type: CARD_TYPES.TITLE,
}

export default Card
