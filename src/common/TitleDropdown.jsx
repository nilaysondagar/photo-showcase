import React, { useEffect, useRef, useState } from 'react'
import * as R from 'ramda'
import classnames from 'classnames';
import Header from './Header'
import Icon from './Icon'

import '../styles/common/TitleDropdown.scss'

const TitleDropdown = ({ classNames, title, options }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [location, setLocation] = useState({
        top: 0,
        left: 20,
        width: 400
    })
    const ref = useRef(null)

    const selectNewAlbum = onClick => {
        setIsOpen(false)
        setTimeout(() => {
            onClick()
        }, 250)
    }

    useEffect(() => {
        if (isOpen && ref.current) {
            const isSmall = window.innerWidth <= 650

            setLocation({
                top: 0,
                left: isSmall ? 22 : 20,
                width: isSmall ? "calc(100% - 4px)" : ref.current.getBoundingClientRect().width
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen])

    useEffect(() => {
        if (window.innerWidth <= 650 && ref.current) {
            setLocation({
                top: 0,
                left: 22,
                width: "calc(100% - 4px)"
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [window.innerWidth])

    return (
        <>
            <div
                className={classnames('title-selector', classNames, { expanded: isOpen })}
                onClick={() => setIsOpen(R.not(isOpen))}
                ref={ref}
                tabIndex="0"
            >
                <Header classNames="dropdown-title" title={title} />
                <Icon classNames="dropdown-icon" name="expand_more" />
            </div>
            <div
                className={classnames('dropdown-options', { expanded: isOpen })}
                style={{
                    top: location.top - 10,
                    left: location.left - 20,
                    minWidth: location.width
                }}
            >
                <div
                    className={classnames('title-selector', classNames, { expanded: isOpen })}
                    onClick={() => setIsOpen(R.not(isOpen))}
                    tabIndex="0"
                >
                    <Header classNames="dropdown-title" title={title} />
                    <Icon classNames="dropdown-icon" name="expand_more" />
                </div>
                {
                    R.map(option =>
                        <Header
                            classNames="dropdown-item"
                            key={option.title}
                            onClick={() => selectNewAlbum(option.onClick)}
                            title={option.title}
                        />
                    )(options || [])
                }
            </div>
        </>
    )
}

export default TitleDropdown
