import React from 'react';
import { useState, useEffect} from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation'
import contentful from '../api/contentful';

const EmbededSection = ({ responseID, navigation }) => {
    const [response, setResponse] = useState([])
    const [url, setURL] = useState('')
    let title = "";
    let imageID = "";
    var entryID = "";
    if(response.data != undefined) {
        if(response.data.fields.title != undefined)
            title = response.data.fields.title
        entryID = response.data.sys.id
        if(response.data.fields.logo != undefined)
            imageID = response.data.fields.logo.sys.id
        var api = contentful.get(`https://cdn.contentful.com/spaces/p9be4lbqo2ng/assets/${imageID}?access_token=rawzjo4Gbf_NDfdtb9mu4lokewMOyOPT5twD1Q_QPHU`)
        api.then(function(respuesta) { setURL(respuesta.data.fields.file.url) }).catch(function(errorMessage) { console.log(errorMessage) });    
    }
    
    const getResponses = async () => {
        try {
            var api = await contentful.get(`https://cdn.contentful.com/spaces/p9be4lbqo2ng/entries/${responseID}?access_token=rawzjo4Gbf_NDfdtb9mu4lokewMOyOPT5twD1Q_QPHU`)
                setResponse(api)
        } catch(err) {
            console.log(err)
        }
    }

    
    useEffect(() => {
        getResponses();
    }, [response]);

    return (
        <>
            <TouchableOpacity onPress={() => navigation.navigate('Details', {
                entryID: entryID,
                title: title
            })}>  
                <View style={{borderBottomColor: '#ccccccff', borderBottomWidth: 1}}></View>
                <View style={styles.containerStyle}>
                        <View style={{flex: 0.35}}>
                            <Image 
                                style={styles.imageStyle}
                                source={{ uri: `https:${url}`}}
                            />
                        </View>
                        <Text style={styles.textStyle}>{title}</Text>
                        <View style={{flex: 0.15}}>
                            <Image 
                                style={styles.imageNextStyle}
                                source={require('../../assets/ArrowSiguiente.png')}
                            />
                        </View>
                </View>
                <View style={{borderBottomColor: '#ccccccff', borderBottomWidth: 1}}></View>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    imageStyle: {
        width: 70,
        height: 70,
        margin: 10,
    },
    imageNextStyle: {
        width: 30,
        height: 30,
        margin: 10
    },
    textStyle: {
        color: '#666666ff',
        marginBottom: 5,
        fontWeight: 'bold',
        fontSize: 16,
        flex: 0.60
    },
    name: {
        fontWeight: 'bold',
    }
});

export default withNavigation(EmbededSection);

/*
            <View style={styles.containerStyle}>
                <View style={{flex: 0.35}}>
                    <Image
                        style={styles.imageStyle} 
                        source={{ uri: `https:${logoURL}`}}
                    />
                </View>
                <Text style={styles.textStyle}>{requestTitle}</Text>
                <View style={{flex: 0.15}}>
                    <Image
                        style={styles.imageNextStyle} 
                        source={require('../../assets/next.png')}
                    />
                </View>

            </View>
*/