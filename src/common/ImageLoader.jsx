import React from 'react'
import classnames from "classnames";
import { useImage } from 'react-image'

import '../styles/common/ImageLoader.scss'

const ImageLoader = ({ alt, classNames, src }) => {
    const { src: foundSrc } = useImage({
        srcList: src,
    })

    return (
        <img
            alt={alt}
            className={classnames(classNames)}
            // container={children => <div className="image-loader">{children}</div>}
            // loaderContainer={children => <div className="image-loader-loading">{children}</div>}
            // loader={<Loader />}
            src={foundSrc}
        />
    )
}


ImageLoader.defaultProps = {
    alt: ''
}

export default ImageLoader
