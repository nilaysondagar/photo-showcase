import React from 'react'
import Button, { BUTTON_TYPES } from '../../common/Button'
import Loader from '../../common/Loader'

import '../../styles/pages/About.scss'

const About = ({ isLoading, siteConfig }) => {
    const openEmail = event => {
        window.location = "mailto:info@sondagar.com?subject=Photography Inquiry";
        event.preventDefault();
    }

    const openInstagram = () => {
        const newWindow = window.open("https://www.instagram.com/csondagar", '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <div className="about">
            <div className="about-main">
                {
                    isLoading
                        ? <div className="loader-box"><Loader /></div>
                        : <div className="about-me-card">
                            <img
                                alt="Chetan Sondagar portrait"
                                className="about-image"
                                src={`${process.env.PUBLIC_URL}/${siteConfig?.about?.profilePictureSrc}`}
                            />
                            <div className="about-text-container">
                                <div className="about-text">{siteConfig?.about?.aboutMe}</div>
                                <div className="contact-text">
                                    <Button
                                        icon="email"
                                        label="Email"
                                        onClick={openEmail}
                                        type={BUTTON_TYPES.ACTION}
                                    />
                                    <Button
                                        icon="photo"
                                        label="Instagram"
                                        onClick={openInstagram}
                                        type={BUTTON_TYPES.ACTION}
                                    />
                                </div>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}

export default About
