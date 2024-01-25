import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StarIcon } from "react-native-heroicons/solid"
import { MapPinIcon } from 'react-native-heroicons/outline'

const FeaturedCard = () => {
    return (
        <TouchableOpacity className="justify-start mx-2 bg-white shadow-sm">
            <Image
                source={{ uri: "https://links.papareact.com/gn7" }}
                className="h-32 w-52"
            />
            <View className="p-4">
                <Text className="text-lg font-bold text-gray-700">Nando's</Text>
                <View className="flex-row items-center">
                    <StarIcon size={16} color="#00ccBB" />
                    <Text className="px-1 text-[#00ccBB] text-xs">
                        4.8
                        <Text className="items-center text-gray-400"> . Offers</Text></Text>
                </View>
                <View className="flex-row items-center pt-2">
                    <MapPinIcon size={18} color="#aaa" />
                    <Text className="items-center text-gray-400 text-xs px-1">Nearby - Clink Street</Text>
                </View>
            </View>
        </TouchableOpacity >
    )
}

export default FeaturedCard
