import React from 'react';
import { View, StyleSheet, Image,TouchableOpacity } from 'react-native';

// receives navigation param so it can navigate to home screen
const RenderFlag = ({navigation}) => {
    // returns a back button image in the left corner that navigates to home
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.goBack()} >
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