import React from 'react'
import { View, ScrollView, Text, StyleSheet } from 'react-native'
import Hr from "react-native-hr-component";

const TextInformation = ( {text} ) => {
    return(
        <>
            <View style={styles.textContainerStyle}>
                <View style={styles.textBoxStyle}>
                    <Text style={styles.textStyle}>{text}</Text>  
                </View>   
            </View>
        </>

    ) 
}

const styles = StyleSheet.create({
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