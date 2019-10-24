import React from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';

const MigrantRightsScreen = () => {
    return (
        <ScrollView style={styles.backgroundStyle}>
            <View style={styles.headerStyle}>
                <Text style={styles.titleStyle}>Derechos de Migrantes</Text>
            </View>
            <View>
                <Text style={styles.textContainerStyle}>Catholic Charities (2019) menciona que todas las personas en los Estados Unidos, independientemente de su estatus migratorio, tienen derechos bajo la
                                                                                    Constitución de los Estados Unidos y otras leyes. Por lo que es importante asegurarse de que todos conozcan sus derechos si se
                                                                                    le acerca la policía o ICE.{"\n"}{"\n"}

                                                                                    Derechos de todos durante una redada de
                                                                                    inmigración (ICE).
                                                                                    Todos, tanto personas
                                                                                    documentadas como indocumentadas,
                                                                                    tienen derechos en este país:{"\n"}{"\n"}
                                                                                    ● A permanecer en silencio.{"\n"}{"\n"}
                                                                                    ● Puede negarse a hablar con un agente de ICE. {"\n"}{"\n"}
                                                                                    ● No responda ninguna pregunta, especialmente sobre su lugar de nacimiento, estado de inmigración o cómo ingresó a los Estados Unidos.{"\n"} {"\n"}
                                                                                    ● Diga que desea permanecer en silencio hasta que hable con un abogado. {"\n"} {"\n"}

                                                                                    ● Tiene derecho a exigir una orden judicial antes de permitir que alguien entre a su hogar. {"\n"}{"\n"}
                                                                                    ● No abra su puerta a las autoridades sin una orden judicial. {"\n"}{"\n"}
                                                                                    ● No necesita abrir la puerta a menos que un agente de ICE le muestre una orden firmada por un juez con su nombre y dirección específicos y correctos. {"\n"}{"\n"}
                                                                                    ● Si dicen que tienen uno, no abra la puerta para que se lo muestren. Pídales que lo pasen por debajo de la puerta o por una ventana. {"\n"}{"\n"}

                                                                                    ● Tiene el derecho de hablar con un abogado y el derecho de hacer una llamada telefónica. {"\n"}{"\n"}
                                                                                    ● Tiene derecho a negarse a firmar cualquier cosa antes de hablar con un abogado. {"\n"}{"\n"}
                                                                                    ● No firmes nada. Eso podría eliminar su derecho a hablar con un abogado o tener una audiencia frente a un juez de inmigración. Esto puede resultar en su deportación inmediata sin una audiencia.{"\n"}{"\n"}
                                                                                    ● Tiene derecho a negarse a mostrar cualquier documento antes de hablar con un abogado.{"\n"}{"\n"}
                                                                                    ● Mantenga la calma y no intente escapar. {"\n"}{"\n"}
                                                                                    ● Si lo hace, ICE o la policía pueden usar eso en su contra

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

export default MigrantRightsScreen;