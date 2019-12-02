import React from 'react'
import { useState} from 'react';
import {Image} from 'react-native'
import contentful from '../api/contentful';

// Receives the id of the image and the style to be applied
const ImageInformation = ( {imageID, style} ) => {
    // variable that changes when the image changes
    const [url, setURL] = useState('')
    // request for the url of the image
    var api = contentful.get(`https://cdn.contentful.com/spaces/p9be4lbqo2ng/assets/${imageID}?access_token=rawzjo4Gbf_NDfdtb9mu4lokewMOyOPT5twD1Q_QPHU`)
    api.then(function(respuesta) { setURL(respuesta.data.fields.file.url) }).catch(function(errorMessage) { console.log(errorMessage) })

    // renders the image with the style
    return(
        <>
            <Image 
                style={style}
                source={{ uri: `https:${url}`}}
            />
        </>

    ) 
}


export default ImageInformation