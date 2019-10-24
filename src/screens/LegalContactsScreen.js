import React from 'react';
import { Text, StyleSheet, View, ScrollView, Image } from 'react-native';

const LegalContactsScreen = () => {
    return (
        <ScrollView style={styles.backgroundStyle}>
            <View style={styles.headerStyle}>
                <Text style={styles.titleStyle}>Datos de Contacto</Text>
            </View>
            <View>
                <Text style={styles.textContainerStyle} >Servicios de inmigración y naturalización para más información:{"\n"}{"\n"}
                                                            Condado de Cook:{"\n"} 
                                                            (312) 655-7700{"\n"}{"\n"}

                                                            Condado de Lake:{"\n"} 
                                                            (847) 782-4000{"\n"}{"\n"}
                                                            
                                                            Se brinda información y referencias de servicios en siete referencias en Chicago y suburbios.{"\n"}{"\n"}

                                                            Ciudad de chicago{"\n"}
                                                            1. Norte{"\n"}
                                                            Centro San Vicente{"\n"}
                                                            721 N. LaSalle St.{"\n"}
                                                            Chicago, IL 60654{"\n"}
                                                            (312) 655-7700{"\n"}{"\n"}

                                                            2. Suroeste{"\n"}
                                                            Parroquia de San Gall{"\n"}
                                                            5533 S. Sawyer Ave.{"\n"}
                                                            Chicago, IL 60629{"\n"}
                                                            (773) 349-8835{"\n"}
                                                            Suburbios del Condado de Cook{"\n"}{"\n"}

                                                            3. Servicios Regionales del Norte / Noroeste{"\n"}
                                                            Centro de Servicios para la Familia{"\n"}
                                                            1717 Rand Road{"\n"}
                                                            Des Plaines, IL 60016{"\n"}
                                                            (847) 376-2100{"\n"}{"\n"}
                                                                    
                                                            
                                                            4. Servicios Regionales del Oeste{"\n"}
                                                            1400 S. Austin{"\n"}
                                                            Cicero, IL 60804{"\n"}
                                                            (708) 222-1491{"\n"}{"\n"}

                                                            5. Servicios Regionales del Sur / Suroeste{"\n"}
                                                            12731 S. Wood St.{"\n"}
                                                            Blue Island, IL 60406{"\n"}
                                                            Sur: (708) 333-8379{"\n"}
                                                            Suroeste: ( 708) 430-0428{"\n"}
                                                            Condado de Lake{"\n"}{"\n"}

                                                            7. Centro Cardenal Bernardin{"\n"}
                                                            671 S. Lewis{"\n"}
                                                            Waukegan, IL 60085{"\n"}
                                                            (847) 782-4000{"\n"}                                       
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
    subHeaderStyle: {
        fontSize: 20
    },
    textContainerStyle: {
        margin: 35,
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

export default LegalContactsScreen;