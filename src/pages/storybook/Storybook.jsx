import React from 'react'
import Header from '../../common/Header'
import Button, { BUTTON_TYPES } from '../../common/Button'
import Card, { CARD_TYPES } from '../../common/Card'

import '../../styles/pages/Storybook.scss'

const Storybook = () => {
    const fakeImageSource = 'https://format-com-cld-res.cloudinary.com/image/private/s--m5oJMEAc--/c_limit,g_center,h_900,w_65535/fl_keep_iptc.progressive,q_95/v1/af037bf8f3538e7459cfc19ab36a9408/EDEK8388.jpg?601'

    return (
        <div className="storybook">
            <Header title="Storybook" />
            <h3>Buttons</h3>
            <div className="section buttons">
                <Button label="Action" />
                <Button icon="face" label="Action Icon" />

                <Button label="Outlined" type={BUTTON_TYPES.OUTLINED} />
                <Button
                    icon="face"
                    label="Outlined Icon"
                    type={BUTTON_TYPES.OUTLINED}
                />

                <Button label="Text" type={BUTTON_TYPES.TEXT} />
                <Button
                    icon="face"
                    label="Text Icon"
                    type={BUTTON_TYPES.TEXT}
                />

                <Button icon="face" type={BUTTON_TYPES.ICON} />
            </div>

            <h3>Cards</h3>
            <div className="section cards">
                <Card
                    imgSrc={fakeImageSource}
                    line1="Medieval"
                    line2="Motions"
                    icon="arrow_forward"
                />
                <Card imgSrc={fakeImageSource} type={CARD_TYPES.IMAGE_ONLY} />
            </div>
        </div>
    )
}

export default Storybook
