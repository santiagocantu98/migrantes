import React from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';

const VisaTypesScreen = () => {
    return (
        <ScrollView style={styles.backgroundStyle}>
            <View style={styles.headerStyle}>
                <Text style={styles.titleStyle}>Tipos de Visa</Text>
            </View>
            <View>
                <Text style={styles.textContainerStyle}>Servicios de inmigración y naturalización{"\n"}{"\n"}
                                                        ○ Provee servicios legales de inmigración de excelente calidad y bajo costo en asuntos que incluye: peticiones familiares, autorización de trabajo, reemplazo/renovación de tarjeta de residencia permanente, naturalización/ciudadanía{"\n"}{"\n"}
                                                        ○ Acción Diferida para los llegados en la niñez (DACA){"\n"}{"\n"}
                                                        ○ Aplicaciones de Visa U{"\n"}{"\n"}
                                                        ○ Ley de Violencia Contra la Mujer (VAWA){"\n"}{"\n"}
                                                        ○ Foros informativos para educar e informar a las comunidades inmigrantes sobre sus derechos y los beneficios a los que pueden ser elegibles{"\n"}{"\n"}
                                                        ○ PARA MÁS INFORMACIÓN:{"\n"}{"\n"}
                                                        Condado de Cook: (312) 427-7078{"\n"}{"\n"}
                                                        Condado de Lake: (847) 782-4225{"\n"}
                                                      
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

export default VisaTypesScreen;