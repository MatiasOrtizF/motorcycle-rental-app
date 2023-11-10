import React, { useState } from 'react';
import { Text, View, SafeAreaView, Platform, TouchableOpacity, ImageBackground, Image, Modal } from "react-native";
import Constants from 'expo-constants';
import { myColors } from "../styles/Colors";
import {Motorcycle} from "../types/index";
import { RootStackParamList } from "../types/RootStackParamList";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import styles from '../styles/Styles';
import CalendarView from './CalenderView';
import { Calendar } from 'react-native-calendars';
import { useRental } from '../hooks/rentalContext';

type motorcycleDetailProps = NativeStackScreenProps<RootStackParamList, 'MotorcycleDetail'>;

export default function MotorcycleDetail({route}: motorcycleDetailProps) {
    const {motorcycleName, image, id, price, rating, length ,torque, weight, fuel, gps} = route.params || {};
    const {saveMotorcycle} = useRental();

    const [showModal, setShowModal] = useState(false);
    const starArray = Array.from({ length: rating }, (_, index) => index);

    const features = [
        {title: 'Length', value: length},
        {title: 'Torque', value: torque},
        {title: 'Weight', value: weight},
        {title: 'Fuel', value: fuel},
    ]

    return(
        <SafeAreaView style={{flex: 1, backgroundColor: "white"}}>
            <View style={{flex: 1, justifyContent: "space-between"}}>
                <View style={{flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 15, width: "100%"}}>
                    <Text style={{width: "90%", fontSize: 20, fontWeight: "700"}}>{motorcycleName}</Text>
                    <TouchableOpacity onPress={()=> saveMotorcycle(id)} style={{width: "10%", alignSelf: "center"}}>
                        <Image style={{width: 25, height: 25, alignSelf: "flex-end"}} source={require('../../assets/icons/save-icon.png')} />
                    </TouchableOpacity>
                </View>
                <ImageBackground style={{width: "100%", height: 250}} source={{uri: image}}/>
                <View style={{padding: 20, borderTopLeftRadius: 15, borderTopRightRadius: 15, backgroundColor: myColors.bgLigth, marginTop: 20}}>
                    <Text style={{fontSize: 22, fontWeight: "800", alignSelf: "center", paddingHorizontal: 25}}>Details</Text>
                    <Text style={{fontWeight: "600", fontSize: 18, marginBottom: 5}}>GPS: {gps ? "Yes" : "No"}</Text>
                    <View>
                        <Text style={{fontWeight: "600", fontSize: 18, marginBottom: 5}}>Rating</Text>
                        <View style={{flexDirection: "row"}}>
                            {starArray.map((index)=> (
                                <Image key={index} style={{width: 18, height: 18}} source={require('../../assets/icons/star-icon-2.png')}/>
                            ))}
                            {rating % 1 !== 0 ?
                                <Image style={{width: 18, height: 18}} source={require('../../assets/icons/star-half-icon-2.png')}/>
                            :
                                null
                            }
                        </View>
                    </View>

                    <View style={{paddingVertical: 15}}>
                        <Text style={{fontWeight: "600", fontSize: 18, marginBottom: 5}}>Features</Text>
                        <View style={{flexDirection: "row", justifyContent: "space-between", gap: 10}}>
                            {features.map(feature => (
                                <View style={{backgroundColor: "white", borderRadius: 10, padding: 10}}>
                                    <Text>{feature.title}</Text>
                                    <Text style={{fontWeight: "600", fontSize: 15}}>{feature.value ? feature.value : "n/a"} mm</Text>
                                </View>
                            ))}
                        </View>
                    </View>

                    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                        <View>
                            <Text>Price</Text>
                            <Text style={{fontWeight: "600", fontSize: 17}}>${price} per day</Text>
                        </View>
                        <TouchableOpacity onPress={()=> setShowModal(!showModal)} style={[styles.btn, {width: "50%"}]}>
                            <Text style={{color: "white"}}>Rental now</Text>
                        </TouchableOpacity>
                    </View>

                    <Modal visible={showModal} animationType='fade'> 
                        <Calendar
                            onDayPress={date=> console.log(date)}
                        />
                        <TouchableOpacity onPress={()=> setShowModal(!showModal)}>
                            <Text>Back</Text>
                        </TouchableOpacity>
                    </Modal>
                </View>
            </View>
        </SafeAreaView>
    )
}