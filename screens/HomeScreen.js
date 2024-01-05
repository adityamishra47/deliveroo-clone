import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {

    const navigation = useNavigation(); // to get the navigation object reference

    return (
        <View>
            <Text className='text-red-700'>HomeScreen</Text>
        </View>
    )
}

export default HomeScreen