import React from 'react';
import { View, Text, StyleSheet, Image, Header, Button, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation'

const RenderFlag = ({navigation}) => {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image   
                    style={styles.imageStyle}
                    source={require('../../assets/back.png')}
                />
            </TouchableOpacity>
        </View>     
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        width: 25,
        height: 25,
        marginRight: 10

    }
});

export default RenderFlag;