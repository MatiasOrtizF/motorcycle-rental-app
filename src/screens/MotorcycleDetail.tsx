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

type motorcycleDetailProps = NativeStackScreenProps<RootStackParamList, 'MotorcycleDetail'>;

export default function MotorcycleDetail({route}: motorcycleDetailProps) {
    const {motorcycleName, image, id, price, rating, length ,torque, weight, fuel} = route.params || {};

    const marginTop = Platform.OS === 'android' ? Constants.statusBarHeight : 0;

    const [showModal, setShowModal] = useState(false);

    return(
        <SafeAreaView style={{flex: 1, backgroundColor: "white"}}>
            <View style={{marginTop, flex: 1, justifyContent: "space-between"}}>
                <ImageBackground style={{width: "100%", height: 250}} source={{uri: image}}/>
                <View style={{padding: 20, borderTopLeftRadius: 15, borderTopRightRadius: 15, backgroundColor: myColors.bgLigth, marginTop: 20}}>
                    <Text style={{fontSize: 20, fontWeight: "700", alignSelf: "center", paddingHorizontal: 25}}>{motorcycleName}</Text>

                    <View>
                        <Text style={{fontWeight: "600", fontSize: 18, marginBottom: 5}}>Rating</Text>
                        <View style={{flexDirection: "row"}}>
                            <Image style={{width: 18, height: 18}} source={require('../../assets/icons/star-icon-2.png')}/>
                            <Image style={{width: 18, height: 18}} source={require('../../assets/icons/star-icon-2.png')}/>
                            <Image style={{width: 18, height: 18}} source={require('../../assets/icons/star-icon-2.png')}/>
                            <Image style={{width: 18, height: 18}} source={require('../../assets/icons/star-icon-2.png')}/>
                            <Image style={{width: 18, height: 18}} source={require('../../assets/icons/star-half-icon-2.png')}/>
                        </View>
                    </View>

                    <View style={{paddingVertical: 15}}>
                        <Text style={{fontWeight: "600", fontSize: 18, marginBottom: 5}}>Features</Text>
                        <View style={{flexDirection: "row", justifyContent: "space-between", gap: 10}}>
                            <View style={{backgroundColor: "white", borderRadius: 10, padding: 10}}>
                                <Text>Length</Text>
                                <Text style={{fontWeight: "600", fontSize: 15}}>{length ? length : "n/a"} mm</Text>
                            </View>
                            <View style={{backgroundColor: "white", borderRadius: 10, padding: 10}}>
                                <Text>Torque</Text>
                                <Text style={{fontWeight: "600", fontSize: 15}}>{torque ? torque : "n/a"} Nm</Text>
                            </View>
                            <View style={{backgroundColor: "white", borderRadius: 10, padding: 10}}>
                                <Text>Weight</Text>
                                <Text style={{fontWeight: "600", fontSize: 15}}>{weight ? weight : "n/a"} kg</Text>
                            </View>
                            <View style={{backgroundColor: "white", borderRadius: 10, padding: 10}}>
                                <Text>FUEL</Text>
                                <Text style={{fontWeight: "600", fontSize: 15}}>{fuel ? fuel : "n/a"} lts</Text>
                            </View>
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