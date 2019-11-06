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
    
    //console.log(response.data)
    if(response.data != undefined) {
        title = response.data.fields.title
        imageID = response.data.fields.logo.sys.id
        var api = contentful.get(`https://cdn.contentful.com/spaces/p9be4lbqo2ng/assets/${imageID}?access_token=rawzjo4Gbf_NDfdtb9mu4lokewMOyOPT5twD1Q_QPHU`)
        api.then(function(respuesta) { setURL(respuesta.data.fields.file.url) })
    }

    //console.log(response)
    /*
    const filterRequestByEntry = () => {
        return requests.filter(request => { 
            if (request.sys.id === sectionNameEntry.data.target.sys.id){
                logoID = request.fields.logo.sys.id
                requestTitle = request.fields.tituloDelContenido
                return request.sys.id
            }
        })
    }

*/
    const getResponses = async (response) => {
        try {
            var api = await contentful.get(`https://cdn.contentful.com/spaces/p9be4lbqo2ng/entries/${responseID}?access_token=rawzjo4Gbf_NDfdtb9mu4lokewMOyOPT5twD1Q_QPHU&include=3`)
            setResponse(api)
        } catch(err) {
            console.log('Something went wrong')
        }
    }


    useEffect(() => {
        getResponses(response);
    }, []);

/*

    const filterLogoByRequest = (logoID) => {
        for (i = 0; i < assets.length; i++) {

            if (assets[i].sys.id === logoID)
                return assets[i].fields.file.url
        }
    }
    request = filterRequestByEntry()
    const logoURL = filterLogoByRequest(logoID)
*/
    return (
        <>
            <TouchableOpacity onPress={() => navigation.navigate('Details')}>       
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
                                source={require('../../assets/next.png')}
                            />
                        </View>
                </View>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        marginTop: 5,
        flex: 1,
        backgroundColor: '#ccccccff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 15
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