import React, { useContext } from 'react'
import { View, Text, ScrollView, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { useState, useEffect} from 'react';
import { withNavigation } from 'react-navigation'
import contentful from '../api/contentful';
import EmbededSection from '../components/EmbededSection'
import TextInformation from '../components/TextInformation'
import ImageInformation from '../components/ImageInformation'
import MapLocation from '../components/MapLocation'
import PhoneCall from '../components/PhoneCall'
import {Linking} from 'react-native'
import BlogContext from '../context/BlogContext'

const DetailsScreen = ({ navigation }) => {
    const value = useContext(BlogContext)
    const [responses, setResponses] = useState()
    const [url,setURL] = useState('');
    let content = [];
    let entryID = navigation.getParam('entryID')
    let title = navigation.getParam('title')
    const getResponses = async (entryID) => {
        try {
            var api = await contentful.get(`https://cdn.contentful.com/spaces/p9be4lbqo2ng/entries/${entryID}?access_token=rawzjo4Gbf_NDfdtb9mu4lokewMOyOPT5twD1Q_QPHU&include=3`)
            setResponses(api.data)
        } catch(err) {
            console.log(err)
        }
    }


    if(responses != undefined) {
        console.log(responses)
        if(responses.fields.content != undefined) {
            for( i = 0; i < responses.fields.content.content.length; i++) {
                if(responses.fields.content.content[i].nodeType === 'embedded-entry-block'){
                    if(responses.fields.content.content[i].data.target.sys.linkType === 'Entry') 
                        content.push(<EmbededSection 
                                        key={i}
                                        responseID = {responses.fields.content.content[i].data.target.sys.id}
                                    />);
                }
                else if(responses.fields.content.content[i].nodeType === 'embedded-asset-block'){
                        if(responses.fields.content.content[i].data.target.sys.linkType === 'Asset') {
                            content.push(<ImageInformation 
                                            key={i}
                                            imageID = {responses.fields.content.content[i].data.target.sys.id}  
                                            style={{flex: 1,height: 130, alignSelf: 'stretch'}}  
                                        />)
                        }
                    }
                    else if(responses.fields.content.content[i].nodeType === 'paragraph' | 
                            responses.fields.content.content[i].nodeType === 'heading-1' | 
                            responses.fields.content.content[i].nodeType === 'heading-2' |
                            responses.fields.content.content[i].nodeType === 'heading-3' |
                            responses.fields.content.content[i].nodeType === 'heading-4' |
                            responses.fields.content.content[i].nodeType === 'heading-5' |
                            responses.fields.content.content[i].nodeType === 'heading-6' |
                            responses.fields.content.content[i].nodeType === 'text') {
                                
                        if(responses.fields.content.content[i].content[0].value != ""){
                            content.push(<TextInformation 
                                            key={i} 
                                            text = {responses.fields.content.content[i]} 
                                        />
                            );
                        }          
                    
                    }
            }
            
            if(responses.fields.phoneNumber != undefined) {
                content.push(<PhoneCall
                                key={'phone'} 
                                phoneNumber={responses.fields.phoneNumber}
                                text={responses.fields.phoneButtonText}
                            />)
            }
        }

        


    }
 

    useEffect(() => {
        getResponses(entryID)
    }, [entryID]);



    return (
        <>
            <ScrollView style={styles.backgroundStyle} showsVerticalScrollIndicator={false}>
                <View style={styles.titleContainerStyle}>
                    <Text style={styles.titleStyle}>{title}</Text>
                </View>
                <View style={styles.containerStyle}>
                    {responses === undefined && 
                        <Text> </Text>
                    }
                    {responses != undefined && 
                        <View>{content}</View>
                    }
                </View>
                     
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        marginRight: 10,
        marginLeft: 20,
        flex: 1,
        fontWeight: 'bold',
        alignSelf: 'center',  
        alignContent: 'center',    
    },
    titleStyle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
      },
    titleContainerStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 80,
        marginLeft: 40,
        marginRight: 40,
        alignItems: 'center',
      },
    containerStyle: {
        flex: 1,
        marginTop: 20,
        backgroundColor: 'white',
        elevation: 5,
        marginLeft: 20,
        marginRight: 20,
    },
    textBoxStyle: {
        flexDirection: 'column', 
    },
    imageStyle: {
        width: 70,
        height: 70,
        margin: 10,
    },
    contentStyle: {
        flex: 1,
        margin: 5,
    },
    backgroundStyle: {
        backgroundColor: '#e06666ff'
      }

});


export default withNavigation(DetailsScreen);
