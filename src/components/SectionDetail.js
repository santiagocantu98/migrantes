import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// Receives a single response and asset (logo)
const SectionDetail = ({ response, assets }) => {
    // finds the logo between all logos
    const sectionLogo = () => {
        for(i = 0; i < assets.length; i++) {
            if(assets[i].sys.id === response.fields.logo.sys.id) {
                return assets[i].fields.file.url    
            }
        
        }
    }
    // gets the logo URL 
    logoURL = sectionLogo() 

    // renders in home page the logo with the title of the response
    return (
        <>
            <View style={styles.container}>
                <Image 
                    style={styles.imageStyle}
                    source={{ uri: `https:${sectionLogo()}`}}
                />
                <Text style={styles.textStyle}>{response.fields.title}</Text>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 150,
        borderRadius: 7,
        margin: 6,
        backgroundColor: '#f5f5f5',
        alignItems: "center",
        justifyContent: "flex-end"
    },
    imageStyle: {
        width: 70,
        height: 70,
        margin: 10
    },
    textStyle: {
        marginBottom: 2,
        fontSize: 18,
        color: '#666666ff'
    },
    name: {
        fontWeight: 'bold',
    }
});

export default SectionDetail;