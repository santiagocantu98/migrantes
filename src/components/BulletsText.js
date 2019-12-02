import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'

// Receives the texts of a Content and returns texts with the styles picked in Contentful to the texts
const BulletsText = ( {text} ) => {
    // contains all the texts
    let content = []
    for(i = 0; i < text.content.length; i++){
        content.push(<View key={i} style={{marginLeft: 30, marginTop: 10, marginRight: 40}}>
                        <View style={{flexDirection: 'row'}}>
                            <Image                     
                                style={styles.imageStyle}
                                source={require('../../assets/right-chevron.png')}
                            />
                            <Text style={{ color: '#666666ff', marginLeft: 10,fontSize: 16}}>{text.content[i].content[0].content[0].value}</Text>
                        </View>
                        
                    </View>)

    }
    
    return(
        <>
            <View style={styles.textContainerStyle}>
                <View>
                    {content}
                </View>   
            </View>
        </>

    );
}
const styles = StyleSheet.create({
    // margin of the text container
    textContainerStyle:{
        
    },
    imageStyle: {
        width: 20,
        height: 20,
        marginRight: 10,
        alignSelf: 'center'

    }
    
});

export default BulletsText