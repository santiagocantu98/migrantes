import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const TextInformation = ( {text} ) => {
    let content = []
    let aux = []
    console.log(text)
    if(text.nodeType === 'heading-4'){
        aux.push('heading-4')
    }
    
    if(text.content[0].marks.length > 0) {
        for(i = 0; i < text.content[0].marks.length; i++) {
            console.log(text.content[0].marks[i])
            if(text.content[0].marks[i].type === 'bold'){
                aux.push('bold')
            }if(text.content[0].marks[i].type === 'italic'){
                aux.push('italic')
            }if(text.content[0].marks[i].type === 'underline'){
                aux.push('underline')
            }
        }
    }
    
        if(aux.includes('bold') && aux.includes('underline') && aux.includes('italic') && aux.includes('heading-4')) {
            content.push(<Text key={i} style={{ fontWeight: 'bold', fontStyle:'italic', textDecorationLine: 'underline', fontSize: 20}}>{text.content[0].value}</Text>)
        }else if(aux.includes('bold') && aux.includes('underline') && aux.includes('heading-4')) {
            content.push(<Text key={i} style={{ fontWeight: 'bold', textDecorationLine: 'underline', fontSize: 20}}>{text.content[0].value}</Text>)
        }else if(aux.includes('bold') && aux.includes('italic') && aux.includes('heading-4')){
            content.push(<Text key={i} style={{ fontWeight: 'bold', fontStyle:'italic' ,fontSize: 20 }}>{text.content[0].value}</Text>)
        }else if(aux.includes('underline') && aux.includes('italic') && aux.includes('heading-4')){
            content.push(<Text key={i} style={{ fontStyle:'italic', textDecorationLine: 'underline',fontSize: 20 }}>{text.content[0].value}</Text>)
        }else if(aux.includes('bold') && aux.includes('underline')) {
            content.push(<Text key={i} style={{ fontWeight: 'bold', textDecorationLine: 'underline'}}>{text.content[0].value}</Text>)
        }else if(aux.includes('bold') && aux.includes('italic')){
            content.push(<Text key={i} style={{ fontWeight: 'bold', fontStyle:'italic' }}>{text.content[0].value}</Text>)
        }else if(aux.includes('underline') && aux.includes('italic')){
            content.push(<Text key={i} style={{ fontStyle:'italic', textDecorationLine: 'underline'}}>{text.content[0].value}</Text>)
        }else if(aux.includes('bold') && aux.includes('heading-4')){
            content.push(<Text key={i} style={{ fontWeight: 'bold',fontSize: 20 }}>{text.content[0].value}</Text>)
        }else if(aux.includes('italic') && aux.includes('heading-4')){
            content.push(<Text key={i} style={{ fontStyle:'italic', fontSize: 20}}>{text.content[0].value}</Text>)
        }else if(aux.includes('underline')&& aux.includes('heading-4')){
            content.push(<Text key={i} style={{ textDecorationLine: 'underline', }}>{text.content[0].value}</Text>)
        }else if(aux.includes('bold')){
            content.push(<Text key={i} style={{ fontWeight: 'bold'}}>{text.content[0].value}</Text>)
        }else if(aux.includes('italic')){
            content.push(<Text key={i} style={{ fontStyle:'italic'}}>{text.content[0].value}</Text>)
        }else if(aux.includes('underline')){
            content.push(<Text key={i} style={{ textDecorationLine: 'underline'}}>{text.content[0].value}</Text>)
        }else if(aux.includes('heading-4')){
            content.push(<Text key={i} style={{fontSize: 20 }}>{text.content[0].value}</Text>)
        }else content.push(<Text key={i} style={{fontSize: 16}}>{text.content[0].value}</Text>)
    
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
    contentStyle: {

    },
    textContainerStyle:{
        margin: 5,
    },
    textBoxStyle: {
        margin: 10,
        flexDirection: 'column', 
    },
    textStyle: {
        fontSize: 16
    }
});

export default TextInformation