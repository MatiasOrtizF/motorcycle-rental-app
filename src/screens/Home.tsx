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
            <View style={{paddingHorizontal: 10}}>
                <View style={{paddingHorizontal: 8}}>
                    <View style={{flexDirection: "row", alignItems: "center", marginVertical: 15}}>
                        <Image style={{width: 50, height: 50, borderRadius: 50, marginRight: 7}} source={{uri: `https://i.pravatar.cc/150?u=${"JuanPerez"}`}}/>
                        <View>
                            <Text>Welcome 👋</Text>
                            <Text style={{fontWeight: "600", fontSize: 16}}>Juan Perez</Text>
                        </View>
                    </View>
                    <TextInput
                        style={{backgroundColor: "white", borderRadius: 50, height: 40, paddingHorizontal: 15, marginBottom: 10}}
                        placeholder='Search your motorcycle'
                    />
                </View>
                 {/* fix marginTop */}
                <FlatList
                    data={motorcycles}
                    renderItem={({item: motorcycle})=> (
                    <View style={{ backgroundColor: "white", flex: 0.5, marginVertical: 10, marginHorizontal: 8, borderRadius: 10, overflow: "hidden"}}>
                        <ImageBackground style={{width: "100%", height: 100}} source={{uri: motorcycle.image}}/>
                        <View style={{paddingHorizontal: 5, paddingBottom: 5}}>
                            <Text numberOfLines={1} ellipsizeMode='tail' style={{marginVertical: 5, fontWeight: 'bold'}}>{motorcycle.motorcycleName}</Text>
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