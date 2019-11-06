import React from 'react';
import useContentful from '../hooks/useContentful';
import { Text, StyleSheet, View, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import RenderFlag from '../components/RenderFlag';
import SectionDetail from '../components/SectionDetail'


const HomeScreen = ({ navigation }) => {
  const [responses, assets, languages] = useContentful();
  const suffix = "_es";
  const filterByCurrentLanguage = () => {
    if (languages.length > 1){
      return languages.filter(language => {
        if(language.fields.suffix === suffix)
          return language.fields.suffix;
      });
    }
  }

  const filterTopicsByLanguage = (section) => {
    return responses.filter(response => {
      if (responses.length > 1){
        if (response.sys.contentType.sys.id === `topic${suffix}` && response.fields.index === true){
          return response.sys.contentType.sys.id === `topic${suffix}` && response.fields.index === true;
        }
      }else return;
    });
  };

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.containerStyle}>
              <FlatList
                  numColumns = '2'
                  scrollEnabled={false}
                  data = {filterTopicsByLanguage()}
                  keyExtractor={(response) => response.sys.id}
                  renderItem = {({ item }) => {
                  return (
                      <TouchableOpacity onPress={() => navigation.navigate('Details', {
                          entryID: item.sys.id}
                      )}>
                        <SectionDetail 
                          response = {item}
                          assets = {assets}
                        /> 
                      </TouchableOpacity>
                  )
                  }}
              />
          </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
  containerStyle: {
    marginTop: 100,
    marginLeft: 40,
    marginRight: 40,
    alignItems: 'center',
    justifyContent: 'space-between'
  }

});

export default HomeScreen;
