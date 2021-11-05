import React from 'react'
import * as R from 'ramda'
import classnames from 'classnames'
import Icon from './Icon'

import '../styles/common/Button.scss'

export const BUTTON_TYPES = {
    ACTION: 'ACTION',
    ICON: 'ICON',
    OUTLINED: 'OUTLINED',
    TEXT: 'TEXT',
}

const Button = ({ classNames, icon, label, onClick, type }) =>
    <div
        className={classnames(
            'button',
            classNames,
            { action: R.equals(BUTTON_TYPES.ACTION, type) },
            { icon: R.equals(BUTTON_TYPES.ICON, type) },
            { outlined: R.equals(BUTTON_TYPES.OUTLINED, type) },
            { text: R.equals(BUTTON_TYPES.TEXT, type) },
        )}
        onClick={onClick}
        role="button"
    >
        <div className="label">
            {icon && <Icon classNames="button-icon" name={icon} />}
            {label}
        </div>
    </div>

Button.defaultProps = {
    onClick: () => console.error('No onClick assigned'),
    type: BUTTON_TYPES.ACTION,
}

export default Button
