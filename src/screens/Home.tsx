import { FlatList, Text, View, TextInput, TouchableOpacity, Platform, Image, ImageBackground } from 'react-native';
import { useEffect } from 'react';
import { useRental } from '../hooks/rentalContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import Constants from 'expo-constants';
import { myColors } from '../styles/Colors';
import MotorcycleList from '../components/MotorcycleList';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../components/Header';
import {Motorcycle} from '../types/index';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import Slider from '@react-native-community/slider';
import Loading from '../components/Loading';

export default function Home() {
    const {getAllMotorcycles, filteredMotorcycle, loading} = useRental();

    useEffect(()=> {
        getAllMotorcycles();
    }, [])

    return(
        loading ? 
            <Loading/>
        :
            <BottomSheetModalProvider>
                <SafeAreaView>
                    <View style={{paddingHorizontal: 10}}>
                        {/* fix marginTop */}
                        <FlatList
                            data={filteredMotorcycle}
                            renderItem={( {item}: {item: Motorcycle})=> (
                                <MotorcycleList {...item}/>
                            )}
                            ListHeaderComponent={Header}
                            showsVerticalScrollIndicator={false}
                            numColumns={2}
                            keyExtractor={item=> item.id.toString()}
                        />
                    </View>
                </SafeAreaView>
            </BottomSheetModalProvider>
    )
}