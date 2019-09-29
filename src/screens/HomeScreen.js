import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.backgroundStyle}>
      <View style={styles.headerStyle}>
        <Text style={styles.textStyle}>Valiosos</Text>
      </View>
      
      <View style={styles.buttonStyle}>
        <Button 
          onPress={() => navigation.navigate('VisaTypes')}
          title="Tipos de Visa"
          color="#e69138ff"
        />
      </View>

      <View style={styles.buttonStyle}>
        <Button 
          onPress={() => navigation.navigate('MigrantRights')}
          title="Derechos de Migrantes"
          color="#c27ba0ff"
        />
      </View>

      <View style={styles.buttonStyle}>
        <Button 
          onPress={() => navigation.navigate('InmigrationRaid')}
          title="Llegada de Inmigración"
          color="#6aa84fff"
        />
      </View>

      <View style={styles.buttonStyle}>
        <Button 
          onPress={() => navigation.navigate('LegalContacts')}
          title="Datos de contacto"
          color="#6d9eebff"
        />
      </View>

      <View style={styles.buttonStyle}>
        <Button 
          onPress={() => navigation.navigate('DomesticViolence')}
          title="Violencia Doméstica"
          color="#f1c232ff"
        />
      </View>





    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30
  },
  textStyle: {
    fontSize: 25
  },
  buttonStyle: {
    marginBottom: 20,
    marginLeft: 50,
    marginRight: 50
  },  
  backgroundStyle: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  }
});

export default HomeScreen;
