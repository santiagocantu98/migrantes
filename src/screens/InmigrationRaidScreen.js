import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const InmigrationRaidScreen = () => {
    
    return (
        <View style={styles.backgroundStyle}>
            <View style={styles.headerStyle}>
                <Text style={styles.titleStyle}>Redadas / Arrestos</Text>
            </View>
            <View>
                <Text  style={styles.textContainerStyle} >¿Qué puede hacer durante una redada de inmigración?{"\n"}{"\n"}
                                                        ○ Si puede hacerlo de manera{"\n"}
                                                        segura, tome fotos, grabe{"\n"}
                                                        videos, documente e informe{"\n"}
                                                        incursiones y arrestos{"\n"}{"\n"}

                                                        ○ Obtenga los nombres y{"\n"}
                                                        números de teléfono de{"\n"}
                                                        cualquier testigo.{"\n"}
                </Text>
            </View>  
        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 25,
        color: 'white'
    },
    textContainerStyle: {
        margin: 35,
        fontSize: 20
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
        backgroundColor: '#cc0000ff',
        height: 50
    }
});

export default InmigrationRaidScreen;