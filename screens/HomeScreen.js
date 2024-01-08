import React, { useLayoutEffect, useState } from 'react'
import {
    View,
    Text,
    SafeAreaView,
    Image,
    TextInput
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {
    UserIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    AdjustmentsVerticalIcon
} from 'react-native-heroicons/outline'

const HomeScreen = () => {
    const [searchItem, setSearchItem] = useState("")

    const navigation = useNavigation(); // to get the navigation object reference

    // useLayoutEffect: as soon as screen/component mounts, do something. 
    // useEffect is executed after the browser renders the component and updates the DOM, while useLayoutEffect is executed before the browser updates the screen.
    useLayoutEffect(() => {
        navigation.setOptions({
            // headerTitle: "Home Page",
            headerShown: false
        })
    }, [])

    const loadSearchItem = (char) => {
        console.log("loadSearchItem: ", char);
        setSearchItem(char);
    }


    return (
        <SafeAreaView className='bg-white pt-5'>
            {/* header */}
            <View className='flex-row pb-3 items-center mx-2 space-x-2'>
                <Image
                    source={{ uri: 'https://links.papareact.com/wru' }}
                    className='h-7 w-7 bg-gray-300 p-4 rounded-full' />

                <View className='flex-1'>
                    <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
                    <Text className='font-bold text-xl'>Current Location
                        <ChevronDownIcon size={20} color="#00ccBB" />
                    </Text>
                </View>

                <UserIcon size={35} color="#00ccBB" />
            </View>

            {/* search */}
            <View className='mx-4 flex-row items-center space-x-2 pb-2'>
                <View className='bg-gray-200 flex-row flex-1 items-center px-2 space-x-2'>
                    <MagnifyingGlassIcon size={20} color='grey' />
                    <TextInput
                        className='h-10 flex-1'
                        placeholder='Restaurants & Cuisines'
                        onChangeText={loadSearchItem}
                    />
                </View>
                <AdjustmentsVerticalIcon size={25} color="#00ccBB" />
            </View>

        </SafeAreaView>
    )
}

export default HomeScreen