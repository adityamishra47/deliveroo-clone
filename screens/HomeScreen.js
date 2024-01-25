import React, { useLayoutEffect, useState } from 'react'
import {
    View,
    Text,
    SafeAreaView,
    Image,
    TextInput,
    ScrollView
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {
    UserIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    AdjustmentsVerticalIcon
} from 'react-native-heroicons/outline'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'
import { DeliverooColor } from '../assets/Colors'

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
        <SafeAreaView className='pt-5 bg-slate-50 mb-24'>
            {/* header */}
            <View className='flex-row pb-3 items-center mx-4 space-x-2'>
                <Image
                    source={{ uri: 'https://links.papareact.com/wru' }}
                    className='h-7 w-7 bg-gray-300 p-4 rounded-full' />

                <View className='flex-1'>
                    <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
                    <Text className='font-bold text-xl'>Current Location
                        <ChevronDownIcon size={20} color={DeliverooColor} />
                    </Text>
                </View>

                <UserIcon size={35} color={DeliverooColor} />
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
                <AdjustmentsVerticalIcon size={25} color={DeliverooColor} />
            </View>

            {/* body */}
            <ScrollView
                className="bg-gray-100"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 100
                }}
            >
                {/* Categories Row */}
                <Categories />

                {/* Featured Row */}
                <FeaturedRow
                    id="123"
                    title="Offers near you!"
                    description="Why not support your local restaurant tonight!"
                />

                <FeaturedRow
                    id="1234"
                    title="Featured"
                    description="Paid placements for our partners"
                />

                <FeaturedRow
                    id="12345"
                    title="Tasty Discounts"
                    description="Paid placements for our partners"
                />

            </ScrollView>

        </SafeAreaView>
    )
}

export default HomeScreen