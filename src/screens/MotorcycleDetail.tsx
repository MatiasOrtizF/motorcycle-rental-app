import React, { useEffect, useState } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, ImageBackground, Image, Modal } from "react-native";
import { myColors } from "../styles/Colors";
import { RootStackParamList } from "../types/RootStackParamList";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import styles from '../styles/Styles';
import { Calendar } from 'react-native-calendars';
import { useRental } from '../hooks/rentalContext';

type motorcycleDetailProps = NativeStackScreenProps<RootStackParamList, 'MotorcycleDetail'>;

export default function MotorcycleDetail({route}: motorcycleDetailProps) {
    const {motorcycleName, image, id, price, rating, length ,torque, weight, fuel, gps} = route.params || {};
    const {saveMotorcycle, addRental} = useRental();

    const [showModal, setShowModal] = useState(false);
    const starArray = Array.from({ length: rating }, (_, index) => index);

    const [dayRental, setDayRental] = useState('');
    const [dayReturn, setDayReturn] = useState('');
    const [totalPrice, setTotalPrice] = useState(0);
    
    const features = [
        {title: 'Length', value: length},
        {title: 'Torque', value: torque},
        {title: 'Weight', value: weight},
        {title: 'Fuel', value: fuel},
    ]

    useEffect(()=> {
        setDayRental('');
        setDayReturn('');
        setTotalPrice(0);
    }, [showModal])

    useEffect(()=> {
        calculateTotalPrice(dayRental, dayReturn);
    },[dayRental, dayReturn])

    const calculateTotalPrice = (dayRental: string, dayReturn: string) => {
        if(dayRental.trim() && dayReturn.trim()) {
            const start = new Date(dayRental).getTime();
            const end = new Date(dayReturn).getTime();
    
            const miliSecondsPerDay = 24 * 60 * 60 * 1000; // milisegundos en un dia
    
            let days = Math.round((end - start) / miliSecondsPerDay)
    
            setTotalPrice(price*days);
        }
    }
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
                            {features.map((feature, index) => (
                                <View key={index} style={{backgroundColor: "white", borderRadius: 10, padding: 10}}>
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
                            <Text style={styles.btnText}>Rental now</Text>
                        </TouchableOpacity>
                    </View>

                    <Modal visible={showModal} animationType='fade'> 
                        <Calendar
                            onDayPress={date=> dayRental.length > 0 ? new Date(date.dateString) < new Date(dayRental) ? (date.dateString) : setDayReturn(date.dateString) : setDayRental(date.dateString)}
                            minDate={new Date().toISOString()}
                            markingType={'period'}
                            markedDates={{
                                [dayRental]: {startingDay: true, color: "lightgreen"},
                                [dayReturn]: {endingDay: true, color: "lightgreen"}
                            }}
                        />
                        <View style={{paddingHorizontal: 20}}>
                            <View style={{flexDirection: "row", justifyContent: "space-between", width: "100%", marginVertical: 35}}>
                                <TouchableOpacity style={[styles.btn, {width: "47%"}]} onPress={()=> setShowModal(!showModal)}>
                                    <Text style={{color: "white", fontWeight: "600", fontSize: 15}}>Back</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=> {
                                    const dataRental = { 
                                        dateRental: new Date(dayRental),
                                        dateReturn: new Date(dayReturn),
                                        totalPrice: totalPrice,
                                        motorcycle: {
                                            id: id
                                        }
                                    }; 
                                        addRental(dataRental)
                                    }} 
                                    style={[styles.btn, {width: "47%"}]}
                                >
                                    <Text style={{color: "white", fontWeight: "600", fontSize: 15}}>Confirm</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Text style={{fontWeight: "600", fontSize: 18, marginBottom: 5}}>Payment status</Text>
                                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                                    <Text>Date rental</Text>
                                    <Text style={{fontWeight: "600"}}>{dayRental}</Text>
                                </View>
                                <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 5}}>
                                    <Text>Date return</Text>
                                    <Text style={{fontWeight: "600"}}>{dayReturn}</Text>
                                </View>
                                <View style={{ backgroundColor: 'black', height: 1.5, marginVertical: 10 }} />
                                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                                    <Text>Total price</Text>
                                    <Text style={{fontWeight: "600"}}>${totalPrice}</Text>
                                </View>
                            </View>
                        </View>
                    </Modal>
                </View>
            </View>
        </SafeAreaView>
    )
}