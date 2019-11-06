import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SectionDetail = ({ response, assets }) => {
    const sectionLogo = () => {
        for(i = 0; i < assets.length; i++) {
            if(assets[i].sys.id === response.fields.logo.sys.id) {
                
                return assets[i].fields.file.url    
            }
        
        }
    }
    logoURL = sectionLogo() 

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
        borderRadius: 15,
        margin: 6,
        backgroundColor: '#ccccccff',
        alignItems: "center",
        justifyContent: "flex-end"
    },
    imageStyle: {
        width: 110,
        height: 110,
        margin: 10
    },
    textStyle: {
        marginBottom: 5,
    },
    name: {
        fontWeight: 'bold',
    }
});

export default SectionDetail;