import { FlatList, Text, View, TextInput, TouchableOpacity, Platform, Image, ImageBackground } from 'react-native';
import { useEffect } from 'react';
import { useRental } from '../hooks/rentalContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import Constants from 'expo-constants';
import { myColors } from '../styles/Colors';
import MotorcycleList from '../components/MotorcycleList';

export default function Home() {
    const {getAllMotorcycles, motorcycles} = useRental();

    useEffect(()=> {
        getAllMotorcycles();
    }, [])

    return(
        <SafeAreaView>
            <View style={{paddingHorizontal: 15}}>
                 {/* fix marginTop */}
                <FlatList
                    data={motorcycles}
                    renderItem={({item: motorcycle})=> (
                    <View style={{ backgroundColor: "white", flex: 0.5, margin: 10, borderRadius: 10, overflow: "hidden"}}>
                        <ImageBackground style={{width: "100%", height: 100}} source={{uri: motorcycle.image}}/>
                        <View style={{paddingHorizontal: 5, paddingBottom: 5}}>
                            <Text style={{marginVertical: 5, fontWeight: 'bold'}}>{motorcycle.motorcycleName}</Text>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: "center"}}>
                                <Text>${motorcycle.price}/per day</Text>
                                <View style={{flexDirection: 'row'}}>
                                    <Image style={{width: 20, height: 20}} source={require('../../assets/icons/star-complet-icon.png')}/>
                                    <Text>4.8</Text>
                                </View>
                                {/* <TouchableOpacity style={{backgroundColor: myColors.orange, paddingHorizontal: 15 , paddingVertical: 5}}>
                                    <Text style={{color: myColors.light}}>Rental</Text>
                                </TouchableOpacity> */}
                            </View>
                        </View>
                    </View>
                    )}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    keyExtractor={item=> item.id.toString()}
                />
            </View>
        </SafeAreaView>
    )
}