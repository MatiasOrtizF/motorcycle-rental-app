import { Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { myColors } from '../styles/Colors';
import React from 'react';
import { motorcycle } from '../service/MotorcycleService';
import Motorcycle from '../types/index';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator , StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from '../types/RootStackParamList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type MotorcycleDetailProps = NativeStackScreenProps<RootStackParamList, 'MotorcycleDetail'>;

export default React.memo(function MotorcycleList({id, image, motorcycleName, price, rating, length ,torque, weight, fuel}: Motorcycle) {
    
    const navigation:any = useNavigation<MotorcycleDetailProps>();

    return (
        <View style={{backgroundColor: "white", flex: 0.5, marginVertical: 10, marginHorizontal: 8, borderRadius: 10, overflow: "hidden"}}>
            <TouchableOpacity onPress={()=> navigation.navigate('MotorcycleDetail', {motorcycleName, image, id, price, rating, length ,torque, weight, fuel})}>
                <ImageBackground style={{width: "100%", height: 100}} source={{uri: image}}/>
                <View style={{paddingHorizontal: 5, paddingBottom: 5}}>
                    <Text numberOfLines={1} ellipsizeMode='tail' style={{marginVertical: 5, fontWeight: '800'}}>{motorcycleName}</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: "center"}}>
                        <Text style={{fontWeight: "500"}}>${price}/per day</Text>
                        <View style={{flexDirection: 'row'}}>
                            {rating ? 
                                <>
                                    <Image style={{width: 20, height: 20}} source={require('../../assets/icons/star-complet-icon.png')}/>
                                    <Text style={{fontWeight: '500'}}>{rating}</Text>
                                </>
                            :
                                <Text>n/a</Text>
                            }
                        </View>
                        {/* <TouchableOpacity style={{backgroundColor: myColors.orange, paddingHorizontal: 15 , paddingVertical: 5}}>
                            <Text style={{color: myColors.light}}>Rental</Text>
                        </TouchableOpacity> */}
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
});