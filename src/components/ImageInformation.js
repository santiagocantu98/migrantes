import React from 'react'
import { useState, useEffect} from 'react';
import { View, ScrollView, Image, StyleSheet, Text } from 'react-native'
import contentful from '../api/contentful';


const ImageInformation = ( {imageID} ) => {
    const [url, setURL] = useState('');
    var api = contentful.get(`https://cdn.contentful.com/spaces/p9be4lbqo2ng/assets/${imageID}?access_token=rawzjo4Gbf_NDfdtb9mu4lokewMOyOPT5twD1Q_QPHU`)
    api.then(function(respuesta) { setURL(respuesta.data.fields.file.url) })



    return(
        <>
            <View style={styles.imageContentStyle}>
                <Image 
                    style={styles.imageStyle}
                    source={{ uri: `https:${url}`}}
                />
            </View>
        </>

    ) 
}

const styles = StyleSheet.create({
    imageContentStyle: {
        margin: 5,
        alignItems: 'center'
    },  
    imageStyle:{
        margin: 5,
        width: 100,
        height: 100,
    },
    textBoxStyle: {
        margin: 10,
        flexDirection: 'column', 
    },
});

export default ImageInformation