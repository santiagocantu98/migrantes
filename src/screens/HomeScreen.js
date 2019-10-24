import React from 'react';
import contentful from '../api/contentful';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  //const [articles, setArticles] = useState([]);
  //const [errorMessage, setErrorMessage] = useState('');

  return (
    <View style={styles.backgroundStyle}>
      <View style={styles.headerStyle}>
        <Text style={styles.headerTextStyle}>- - - - - - </Text>
      </View>
        <View style={styles.containerStyle}>
          <View style={styles.containerButtonsStyle}>

            <View>
              <TouchableOpacity 
                style={styles.buttonStyle}
                onPress={() => navigation.navigate('VisaTypes')}>
                <Text>Tipos de Visa</Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity 
                style={styles.buttonStyle}
                onPress={() => navigation.navigate('MigrantRights')}>
                <Text>Tus Derechos</Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity 
                style={styles.buttonStyle}
                onPress={() => navigation.navigate('InmigrationRaid')}>
                <Text>Redadas / Arrestos </Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity 
                style={styles.buttonStyle}
                onPress={() => navigation.navigate('LegalContacts')}>
                <Text>Contacto de Emergencia</Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity 
                style={styles.buttonStyle}
                onPress={() => navigation.navigate('DomesticViolence')}>
                <Text>Violencia Doméstica</Text>
              </TouchableOpacity>
            </View>

            
          </View>
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
  headerTextStyle: {
    fontSize: 25
  },
  textStyle: {
    fontSize: 25
  },
  containerStyle: {
    backgroundColor: '#cc0000ff',
    borderRadius: 5,
    marginLeft: 30,
    marginRight: 30,
  },
  containerButtonsStyle: {
    marginTop: 20,
  },
  buttonStyle: {
    marginBottom: 20,
    marginLeft: 50,
    marginRight: 50,
    backgroundColor: '#E68383',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },  
  backgroundStyle: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  }
});

export default HomeScreen;
