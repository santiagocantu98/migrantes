import React from 'react'
import {View,Text, Header} from 'react-native'
import { withNavigation } from 'react-navigation'

const AppHeader = (navigation) => {
    return {
        title: 'hola'
    };
}

export default withNavigation(AppHeader)