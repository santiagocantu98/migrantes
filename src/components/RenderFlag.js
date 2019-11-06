import React from 'react';
import { View, Text, StyleSheet, Image, Header, Button, TouchableOpacity } from 'react-native';

const RenderFlag = () => {
    return (
        <View>
            <TouchableOpacity>
                <Image   
                    style={styles.imageStyle}
                    source={require('../../assets/IdiomaEspanol.png')}
                />
            </TouchableOpacity>
        </View>     
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        width: 35,
        height: 35,
        marginRight: 5

    }
});

export default RenderFlag;