import { Text, View, TouchableOpacity, Image } from 'react-native';
import { myColors } from '../styles/Colors';
import React from 'react';

interface Motorcycle {
    id: string;
    image: string;
    motorcycleName: string;
    price: number;
}

export default React.memo(function MotorcycleList({item: motorcycle}: {item: Motorcycle}) {
    return (
        <View style={{ backgroundColor: "white", margin: 20}}>
            <Image style={{width: "100%", height: 200}} source={{uri: motorcycle.image}}></Image>
            <Text numberOfLines={1} ellipsizeMode='tail' style={{marginVertical: 5, fontWeight: 'bold'}}>{motorcycle.motorcycleName}</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: "center"}}>
                <Text>{motorcycle.price}$/per day</Text>
                <TouchableOpacity style={{backgroundColor: myColors.orange, paddingHorizontal: 15 , paddingVertical: 5}}>
                    <Text style={{color: myColors.light}}>Rental</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
});