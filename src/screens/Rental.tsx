import { FlatList, Text, View, TextInput, TouchableOpacity, Platform, Image } from 'react-native';
import { useEffect } from 'react';
import { useRental } from '../hooks/rentalContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import Constants from 'expo-constants';
import { myColors } from '../styles/Colors';

export default function Rental() {
    const {getAllMotorcycles, motorcycles} = useRental(); //fix this error

    useEffect(()=> {
        getAllMotorcycles();
    }, [])

    const marginTop = Platform.OS === 'android' ? Constants.statusBarHeight : 0;

    return (
        <SafeAreaView>
            <View style={{marginTop, backgroundColor: myColors.dark}}>
                <FlatList
                    data={motorcycles}
                    renderItem={({item: motorcycle})=> (
                        <View style={{ backgroundColor: "white", margin: 20}}>
                            <Image style={{width: "100%", height: 200}} source={{uri: motorcycle.image}}></Image>
                            <Text style={{marginVertical: 5, fontWeight: 'bold'}}>{motorcycle.motorcycleName}</Text>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: "center"}}>
                                <Text>{motorcycle.price}$/per day</Text>
                                <TouchableOpacity style={{backgroundColor: myColors.orange, paddingHorizontal: 15 , paddingVertical: 5}}>
                                    <Text style={{color: myColors.light}}>Rental</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                    keyExtractor={item=> item.id}
                />
            </View>
        </SafeAreaView>
    );
}