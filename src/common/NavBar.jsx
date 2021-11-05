import React from 'react'
import * as R from 'ramda'
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../utils/routes';
import '../styles/common/NavBar.scss'
import Logo from './Logo';

import NavLink from './NavLink';
import Icon from './Icon';

const NavBar = ({ theme, toggleTheme }) => {
    const history = useHistory()

    const goHome = () => history.push('/')

    return (
        <div className="nav-bar">
            <Logo goHome={goHome} />
            <Icon
                classNames="theme-toggle"
                name={R.equals('light-theme', theme) ? 'dark_mode' : 'light_mode'}
                onClick={toggleTheme}
            />
            <div className="spacer" /> { /* Spacer for grid */}
            <div className="nav-links">
                {
                    R.pipe(
                        R.values,
                        R.reject(R.propEq('showInNavBar', false)),
                        R.map(({ isExact, label, path }) =>
                            <NavLink
                                isExact={isExact}
                                label={label}
                                key={`nav-bar-key-${label}`}
                                path={path}
                            />
                        )
                    )(ROUTES)
                }
            </div>
        </div>
    )
}

export default NavBar
