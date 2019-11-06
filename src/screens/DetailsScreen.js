import React from 'react'
import { View, Text, ScrollView, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import HomeScreen from './HomeScreen'
import contentful from '../api/contentful';
import EmbededSection from '../components/EmbededSection'
import TextInformation from '../components/TextInformation'
import ImageInformation from '../components/ImageInformation'

const DetailsScreen = ({ navigation }) => {
    let content = [];
    let text = [];
    const responses = navigation.getParam('responses')

    /*var api = contentful.get(`https://cdn.contentful.com/spaces/p9be4lbqo2ng/entries/${responses.sys.id}?access_token=rawzjo4Gbf_NDfdtb9mu4lokewMOyOPT5twD1Q_QPHU&include=3`)
    api.then(function(respuesta) { filterByEntryType(respuesta.data.fields.content.content)})

    const filterByEntryType = (response) => {
        console.log(response)*/
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


    return (
        <>
            <ScrollView style={styles.containerStyle}>
                <View>
                    {content}   
                </View>   
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    containerStyle: {
        margin: 20,
        backgroundColor: '#ccccccff',
    },
    textBoxStyle: {
        flexDirection: 'column', 
    },
    contentStyle: {
        flex: 1,
        margin: 5,
        backgroundColor: '#ccccccff',
    },

});




export default DetailsScreen
