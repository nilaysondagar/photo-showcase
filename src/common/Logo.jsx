import React from 'react'

import '../styles/common/Logo.scss'

const Logo = ({ goHome }) =>
    <div className="logo" onClick={goHome}>
        <div className="letters">CS</div>
        <div className="title">
            <div className="line first">Chetan Sondagar</div>
            <div className="line second">Photography</div>
        </div>
    </div>

export default Logo
