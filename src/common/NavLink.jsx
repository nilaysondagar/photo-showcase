import React from 'react'
import { NavLink as RouterNavLink } from 'react-router-dom';
import classnames from 'classnames'

const NavLink = ({ isExact, label, path }) =>
    <RouterNavLink
        activeClassName={classnames('button', 'nav-link', 'active')}
        className={classnames('button', 'nav-link')}
        exact={isExact}
        to={path}
    >
        {label}
        <div className="active-indicator" />
    </RouterNavLink>

export default NavLink
