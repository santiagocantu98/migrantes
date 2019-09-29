import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const MigrantRightsScreen = () => {
    return (
        <View style={styles.backgroundStyle}>
            <View style={styles.headerStyle}>
                <Text style={styles.textStyle}>Derechos de Migrantes</Text>
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
        backgroundColor: '#c27ba0ff',
        height: 50
    }
});

export default MigrantRightsScreen;