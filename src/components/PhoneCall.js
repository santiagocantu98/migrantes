import React from 'react'
import { View,StyleSheet, Text } from 'react-native'
import {Linking} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';


const PhoneCall = ( { phoneNumber, text} ) => {
    return(
        <>
            <TouchableOpacity onPress={()=>{Linking.openURL(`tel:${phoneNumber}`);}} style={styles.funcNavText}>
                <View style={styles.phoneContainer}>
                    <Text style={styles.textStyle}>{text}</Text>
                </View>
                
            </TouchableOpacity>
        </>

    ) 
}

const styles = StyleSheet.create({
    phoneContainer: {
        flex: 1,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4ae08f'
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'center',
        color: 'white'
    },
});

export default PhoneCall