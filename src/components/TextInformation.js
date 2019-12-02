import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

// Receives the texts of a Content and returns texts with the styles picked in Contentful to the texts
const TextInformation = ( {text} ) => {
    // contains all the texts
    let content = []
    // contains the style of the text
    let aux = []
    // If the text has a Heading 4 style, then set heading-4
    if(text.nodeType === 'heading-4'){
        aux.push('heading-4')
    }
    
    // If it exists a style from Contentful then set which style is used
    if(text.content[0].marks.length > 0) {
        for(i = 0; i < text.content[0].marks.length; i++) {
            if(text.content[0].marks[i].type === 'bold'){
                aux.push('bold')
            }if(text.content[0].marks[i].type === 'italic'){
                aux.push('italic')
            }if(text.content[0].marks[i].type === 'underline'){
                aux.push('underline')
            }
        }
    }
    // Conditions to set the style (picked on Contentful) of the text that is going to be displayed
        if(aux.includes('bold') && aux.includes('underline') && aux.includes('italic') && aux.includes('heading-4')) {
            content.push(<Text key={i} style={{ fontWeight: 'bold', fontStyle:'italic', textDecorationLine: 'underline', fontSize: 20,color: '#666666ff'}}>{text.content[0].value}</Text>)
        }else if(aux.includes('bold') && aux.includes('underline') && aux.includes('heading-4')) {
            content.push(<Text key={i} style={{ fontWeight: 'bold', textDecorationLine: 'underline', fontSize: 20,color: '#666666ff'}}>{text.content[0].value}</Text>)
        }else if(aux.includes('bold') && aux.includes('italic') && aux.includes('heading-4')){
            content.push(<Text key={i} style={{ fontWeight: 'bold', fontStyle:'italic' ,fontSize: 20,color: '#666666ff' }}>{text.content[0].value}</Text>)
        }else if(aux.includes('underline') && aux.includes('italic') && aux.includes('heading-4')){
            content.push(<Text key={i} style={{ fontStyle:'italic', textDecorationLine: 'underline',fontSize: 20,color: '#666666ff' }}>{text.content[0].value}</Text>)
        }else if(aux.includes('bold') && aux.includes('underline')) {
            content.push(<Text key={i} style={{ fontWeight: 'bold', textDecorationLine: 'underline',color: '#666666ff'}}>{text.content[0].value}</Text>)
        }else if(aux.includes('bold') && aux.includes('italic')){
            content.push(<Text key={i} style={{ fontWeight: 'bold', fontStyle:'italic' }}>{text.content[0].value}</Text>)
        }else if(aux.includes('underline') && aux.includes('italic')){
            content.push(<Text key={i} style={{ fontStyle:'italic', textDecorationLine: 'underline',color: '#666666ff'}}>{text.content[0].value}</Text>)
        }else if(aux.includes('bold') && aux.includes('heading-4')){
            content.push(<Text key={i} style={{ fontWeight: 'bold',fontSize: 20,color: '#666666ff' }}>{text.content[0].value}</Text>)
        }else if(aux.includes('italic') && aux.includes('heading-4')){
            content.push(<Text key={i} style={{ fontStyle:'italic', fontSize: 20,color: '#666666ff'}}>{text.content[0].value}</Text>)
        }else if(aux.includes('underline')&& aux.includes('heading-4')){
            content.push(<Text key={i} style={{ textDecorationLine: 'underline',color: '#666666ff' }}>{text.content[0].value}</Text>)
        }else if(aux.includes('bold')){
            content.push(<Text key={i} style={{ fontWeight: 'bold',color: '#666666ff',fontSize: 16}}>{text.content[0].value}</Text>)
        }else if(aux.includes('italic')){
            content.push(<Text key={i} style={{ fontStyle:'italic',color: '#666666ff',fontSize: 16}}>{text.content[0].value}</Text>)
        }else if(aux.includes('underline')){
            content.push(<Text key={i} style={{ textDecorationLine: 'underline',color: '#666666ff',fontSize: 16}}>{text.content[0].value}</Text>)
        }else if(aux.includes('heading-4')){
            content.push(<Text key={i} style={{fontSize: 20,color: '#666666ff'}}>{text.content[0].value}</Text>)
        }else content.push(<Text key={i} style={{fontSize: 16 ,color: '#666666ff'}}>{text.content[0].value}</Text>)
    
        // return the text with the used styles.
    return(
        <>
            <View style={styles.textContainerStyle}>
                <View>
                    {content}
                </View>   
            </View>
        </>

    );
}
const styles = StyleSheet.create({
    // margin of the text container
    textContainerStyle:{
        margin: 10,
        fontSize: 15,
    },
    
});

export default TextInformation