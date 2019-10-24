import React from 'react';
import { Text, StyleSheet, View, ScrollView, Image} from 'react-native';

const DomesticViolenceScreen = () => {
    return (
        <ScrollView style={styles.backgroundStyle}>
            <View style={styles.headerStyle}>
                <Text style={styles.titleStyle}>Violencia Domestica</Text>
            </View> 
            <View>
                <Text style={styles.textContainerStyle} >Servicios comunitarios y consejería y violencia doméstica:{"\n"}{"\n"}
                                                            ○ 1800 N. Hermitage, Chicago, IL 60622. Teléfono de admisión: (312) 655-7725{"\n"}{"\n"}

                                                            ○ Ofrece asesoramiento
                                                            profesional y servicios de
                                                            administración a familias e
                                                            individuos que están
                                                            experimentando problemas
                                                            sociales y personales que
                                                            afectan sus habilidades de enfrentarlos.{"\n"}

                                                            
                </Text>
            </View>     
        </ScrollView>
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
    languageContainerStyle: {
        height: 100
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

export default DomesticViolenceScreen;