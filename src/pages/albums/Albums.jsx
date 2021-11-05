import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import * as R from 'ramda'
import Card from '../../common/Card'
import Header from '../../common/Header'

import '../../styles/pages/Albums.scss'

const Albums = () => {
    const [albums, setAlbums] = useState([
        {
            album: 'blossoming-beats',
            coverImage: `${process.env.PUBLIC_URL}/albums/testing/image1.jpg`,
            line1: 'Blossoming',
            line2: 'Beats',
        },
        {
            album: 'streetwear-season',
            coverImage: `${process.env.PUBLIC_URL}/albums/testing/image2.jpg`,
            line1: 'Streetwear',
            line2: 'Season',
        },
        {
            album: 'city-connections',
            coverImage: `${process.env.PUBLIC_URL}/albums/testing/image3.jpg`,
            line1: 'City',
            line2: 'Connections',
        },
        {
            album: 'medieval-motions',
            coverImage: `${process.env.PUBLIC_URL}/albums/testing/image4.jpg`,
            line1: 'Medieval',
            line2: 'Motions',
        },
        {
            album: 'personal-portraits',
            coverImage: `${process.env.PUBLIC_URL}/albums/testing/image5.jpg`,
            line1: 'Personal',
            line2: 'Portraits',
        },
        {
            album: 'scrolling-sensations',
            coverImage: `${process.env.PUBLIC_URL}/albums/testing/image6.jpg`,
            line1: 'Scrolling',
            line2: 'Sensations',
        },
    ])

    const history = useHistory()

    const goToAlbum = path => () => history.push(`/albums/${path}`)

    return (
        <div className="albums">
            <Header classNames="album-title" title="Albums" />
            <div className="album-list">
                {
                    R.map(({ album, coverImage, line1, line2 }) =>
                        <Card
                            classNames="album-card"
                            icon="arrow_forward"
                            imgSrc={coverImage}
                            line1={line1}
                            line2={line2}
                            iconOnClick={goToAlbum(album)}
                        />
                    )(albums)
                }
                <div className="spacer" />
            </div>
        </div>
    )
}

export default Albums
