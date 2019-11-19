import React, { useState} from 'react';
import useContentful from '../hooks/useContentful';
import { Text, StyleSheet, View, FlatList, ScrollView, TouchableOpacity, Image} from 'react-native';
import SectionDetail from '../components/SectionDetail'
import {Menu, MenuOptions, MenuOption, MenuTrigger} from 'react-native-popup-menu';
import ImageInformation from '../components/ImageInformation';

const HomeScreen = ({ navigation }) => {
  const [responses, assets, languages] = useContentful()
  const [suffix, setSuffix] = useState('_es')
  const languageOptions = []
  let imageID = ""

  if (languages != undefined) {
    for(i = 0; i < languages.length; i++) {
      if(languages[i].fields.suffix === suffix){
        imageID = languages[i].fields.logoOfTheLanguageFlag.sys.id
      }
      languageOptions.push(<MenuOption
                            key={i}
                            value={languages[i].fields.suffix}
                          >
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                              <Text>{languages[i].fields.language}</Text>
                              <ImageInformation  
                                style={{ height: 20, width: 20}}  
                                imageID = {languages[i].fields.logoOfTheLanguageFlag.sys.id}
                              />
                            </View>

                          </MenuOption>)
    }
  }
  

  const filterTopicsByLanguage = (section) => {
    return responses.filter(response => {
      if (responses.length > 1){
        if (response.sys.contentType.sys.id === `topic${suffix}` && response.fields.index === true){
          return response.sys.contentType.sys.id === `topic${suffix}` && response.fields.index === true
        }
      }else return;
    });
  };

  return (
    <>
      <ScrollView style={styles.backgroundStyle} showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'row',justifyContent: 'flex-end', marginTop: 30, marginRight: 10}}>
          <Menu onSelect={value => setSuffix(value)}>
            <MenuTrigger>
                <ImageInformation   
                    style={{width: 25, height: 25, marginTop:10, marginLeft: 10}}
                    imageID={imageID}
                />
            </MenuTrigger>
            <MenuOptions  optionsContainerStyle={{ marginTop: 40, width: 100,  }} style={{ padding: 5}}>
                {languageOptions }
            </MenuOptions>
          </Menu>
        </View>
        <View style={styles.titleContainerStyle}> 
            <Text style={styles.titleStyle}>App Name</Text>
        </View>
        <View style={styles.containerStyle}>
            <FlatList
                numColumns = '2'
                scrollEnabled={false}
                data = {filterTopicsByLanguage()}
                keyExtractor={(response) => response.sys.id}
                renderItem = {({ item }) => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('Details', 
                      {
                        entryID: item.sys.id,
                        title: item.fields.title
                      }
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
    fontSize: 30,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  titleContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 60,
    marginLeft: 40,
    marginRight: 40,
  },
  containerStyle: {
    marginTop: 20,
    marginLeft: 40,
    marginRight: 40,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  backgroundStyle: {
    backgroundColor: '#f5f5f5'
  },    
  imageStyle: {
    width: 25,
    height: 25,
    marginTop: 10,
    marginLeft: 10,
  },

});

export default HomeScreen;
