import React from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';


const MapLocation = ( {lon, lat} ) => {


    return(
        <>
            <MapView
                showsUsersLocation = {false}
                style={{ flex: 1, height: 130, alignSelf: 'stretch'}}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: lat,
                    longitude: lon,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005
                }}
            >
                <MapView.Marker
                    showsUsersLocation = {false}
                    coordinate={{
                        latitude: lat,
                        longitude: lon
                    }}
                />
            </MapView>
        </>

    )}          

export default MapLocation