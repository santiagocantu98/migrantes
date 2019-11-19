import React from 'react'
import { useState, useEffect} from 'react';
import { View, ScrollView, Image, StyleSheet, Text } from 'react-native'
import contentful from '../api/contentful';
import { Dimensions } from 'react-native';


const ImageInformation = ( {imageID, style} ) => {
    const [url, setURL] = useState('')
    var api = contentful.get(`https://cdn.contentful.com/spaces/p9be4lbqo2ng/assets/${imageID}?access_token=rawzjo4Gbf_NDfdtb9mu4lokewMOyOPT5twD1Q_QPHU`)
    api.then(function(respuesta) { setURL(respuesta.data.fields.file.url) }).catch(function(errorMessage) { console.log(errorMessage) })

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