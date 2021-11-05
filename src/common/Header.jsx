import React from 'react'
import * as R from 'ramda'
import classnames from 'classnames'

import '../../src/styles/common/Header.scss'

const Header = ({ classNames, onClick, title }) =>
    <div
        className={classnames('header', classNames)}
        onClick={onClick || R.F}
        tabIndex={onClick ? "0" : null}
    >
        {title}
    </div>

export default Header
