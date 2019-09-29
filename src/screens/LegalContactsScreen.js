import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const LegalContactsScreen = () => {
    return (
        <View style={styles.backgroundStyle}>
            <View style={styles.headerStyle}>
                <Text style={styles.textStyle}>Datos de Contacto</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 25
    },
    subHeaderStyle: {
        fontSize: 20
    },
    backgroundStyle: {
        flex: 1,
        backgroundColor: '#f5f5f5'
    },
    headerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6d9eebff',
        height: 50
    }
});

export default LegalContactsScreen;