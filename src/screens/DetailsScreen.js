import React, { useContext } from 'react'
import { View, Text, ScrollView, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { useState, useEffect} from 'react';
import HomeScreen from './HomeScreen'
import { withNavigation } from 'react-navigation'
import contentful from '../api/contentful';
import EmbededSection from '../components/EmbededSection'
import TextInformation from '../components/TextInformation'
import ImageInformation from '../components/ImageInformation'
import BlogContext from '../context/BlogContext'
import { createStackNavigator, createAppContainer, createBottomTabNavigator, } from 'react-navigation';

const DetailsScreen = ({ navigation }) => {
    const value = useContext(BlogContext)
    const [responses, setResponses] = useState()
    const [url,setURL] = useState('')
    let content = [];
    let title = "";
    let entryID = navigation.getParam('entryID')

    DetailsScreen.navigationOptions = () => {
        console.log(title)
        return title;
    }
/*
    if(responses != undefined) {

    }
*/  

    const getResponses = async (entryID) => {
        try {
            var api = await contentful.get(`https://cdn.contentful.com/spaces/p9be4lbqo2ng/entries/${entryID}?access_token=rawzjo4Gbf_NDfdtb9mu4lokewMOyOPT5twD1Q_QPHU&include=3`)
            setResponses(api.data)
        } catch(err) {
            console.log('Something went wrong')
        }
    }


    useEffect(() => {
            getResponses(entryID)
    }, [entryID]);


    if(responses != undefined) {
        /*var api = contentful.get(`https://cdn.contentful.com/spaces/p9be4lbqo2ng/assets/${responses.fields.logo.sys.id}?access_token=rawzjo4Gbf_NDfdtb9mu4lokewMOyOPT5twD1Q_QPHU`)
        api.then(function(respuesta) { setURL(respuesta.data.fields.file.url) })
        title = responses.fields.title;
        */
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
                                    />)
                    }
                }
                else if(responses.fields.content.content[i].nodeType === 'paragraph') {
                    if(responses.fields.content.content[i].content[0].value != ""){
                        content.push(<TextInformation 
                                        key={i} 
                                        text = {responses.fields.content.content[i].content[0].value} 
                                    />
                        );
                    }          
                }
        }
    }



    return (
        <>
            <ScrollView style={styles.contentStyle} showsVerticalScrollIndicator={false}>
                <View style={styles.containerStyle}>
                 {/*<View style={{flex: 0.35}}>
                        <Image 
                            style={styles.imageStyle}
                            source={{ uri: `https:${url}`}}
                        />
                    </View>
                    <View style={{flex: 0.30}}>
                        <Text style={styles.textStyle}>{title}</Text>
                    </View>
                 */}
                    
                </View>
                <View style={{ backgroundColor: 'white'}}>
                    {content}
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
    contentStyle: {
        flex: 1,
    },
    containerStyle: {
        flex: 1,
        backgroundColor: '#ccccccff',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 15
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

});




export default DetailsScreen;
