import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/solid'
import { DeliverooColor } from '../assets/Colors'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({ id, title, description }) => {
    return (
        <View>
            <View className="mt-4 flex-row justify-between px-4 ">
                <Text className="font-bold text-lg">{title}</Text>
                <ArrowRightIcon color={DeliverooColor} />
            </View>
            <Text className="text-gray-500 px-4 text-xs ">{description}</Text>
            <ScrollView
                horizontal
                contentContainerStyle={{
                    paddingHorizontal: 15
                }}
                className="pt-4"
                showsHorizontalScrollIndicator={false}
            >

                <RestaurantCard
                    id={123}
                    imgUrl="https://links.papareact.com/gn7"
                    title="Yo! sushi"
                    rating={4.5}
                    genre="Japanese"
                    address="123 main st"
                    short_description="This is a short description."
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                <RestaurantCard
                    id={1234}
                    imgUrl="https://links.papareact.com/gn7"
                    title="Yo! sushi"
                    rating={4.5}
                    genre="Japanese"
                    address="123 main st"
                    short_description="This is a short description."
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                <RestaurantCard
                    id={12345}
                    imgUrl="https://links.papareact.com/gn7"
                    title="Yo! sushi"
                    rating={4.5}
                    genre="Japanese"
                    address="123 main st"
                    short_description="This is a short description."
                    dishes={[]}
                    long={20}
                    lat={0}
                />

            </ScrollView>
        </View>
    )
}
export default FeaturedRow;