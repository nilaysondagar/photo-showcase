import React, { useState, useEffect } from 'react'
import * as R from 'ramda'
import Card, { CARD_TYPES } from '../../common/Card'

import '../../styles/pages/Home.scss'
import TitleDropdown from '../../common/TitleDropdown'
import Loader from '../../common/Loader'

const Home = ({ isLoading, siteConfig }) => {
    const [currentAlbum, setCurrentAlbum] = useState({})

    useEffect(() => {
        setCurrentAlbum(R.path(['albums', 0], siteConfig))
    }, [siteConfig])

    const changeCurrentAlbum = index => R.pipe(
        R.path(['albums', index]),
        setCurrentAlbum,
    )(siteConfig)

    const getDropdownOptions = () => R.pipe(
        R.propOr([], 'albums'),
        R.addIndex(R.map)((item, index) =>
            R.applySpec({
                onClick: () => () => changeCurrentAlbum(index),
                title: R.prop('title'),
            })(item)
        ),
        R.reject(R.propEq('title', currentAlbum.title)),
    )(siteConfig)

    const getImgSrc = index =>
        `${process.env.PUBLIC_URL}/albums/${currentAlbum.folderName}/image${index}.jpg`

    const getImageKey = index => `home-card-key-${currentAlbum.folderName}-${index}`

    return (
        <div className="home">
            <div className="home-main">
                {
                    isLoading
                        ? <div className="loader-box"><Loader /></div>
                        : <>
                            <TitleDropdown
                                title={currentAlbum.title}
                                options={getDropdownOptions()}
                            />
                            <div className="image-slider">
                                {
                                    R.addIndex(R.map)((_, imageIndex) =>
                                        <Card
                                            classNames="home-image-card"
                                            imgSrc={getImgSrc(imageIndex)}
                                            key={getImageKey(imageIndex)}
                                            type={CARD_TYPES.IMAGE_ONLY}
                                        />
                                    )(new Array(currentAlbum.lastImageIndex))
                                }
                            </div>
                        </>
                }
            </div>
        </div>
    )
}

export default Home
