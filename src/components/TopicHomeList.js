import { React, useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';


const TopicHomeList = () => {
 
    return (
        <ScrollView>
            <Text>Hola</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    containerStyle: {
        marginTop: 100,
        marginLeft: 40,
        marginRight: 40,
        alignItems: 'center',
        justifyContent: 'space-between'
    }

});

export default TopicHomeList;