import React from 'react'
import classnames from 'classnames'

import '../styles/common/Icon.scss'

const Icon = ({ classNames, name, onClick }) => {
    return (
        <i
            className={classnames('material-icons', classNames, { clickable: onClick})}
            onClick={onClick}
            tabIndex={onClick ? "0" : null}
        >
            {name}
        </i>
    )
}

export default Icon
