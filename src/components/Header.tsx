import { useEffect, useRef, useState } from 'react';
import { FlatList, Text, View, TextInput, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import Modal from './Modal';
import { useRental } from '../hooks/rentalContext';

export default function Header() {
    const {userData} = useRental();

    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const snapPoints = ["35%"];

    function handlePresentModal() {
        bottomSheetModalRef.current?.present();
    }

    return(
        <View style={{paddingHorizontal: 8}}>
            <View style={{flexDirection: "row", marginBottom: 15, marginTop: 5, justifyContent: "space-between"}}>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Image style={{width: 45, height: 45, borderRadius: 50, marginRight: 7}} source={{uri: `https://i.pravatar.cc/150?u=${"JuanPerez"}`}}/>
                    <View>
                        <Text>Welcome 👋</Text>
                        <Text style={{fontWeight: "600", fontSize: 16}}>{userData.name + " " + userData.lastName}</Text>
                    </View>
                </View>
                <TouchableWithoutFeedback onPress={handlePresentModal}>
                    <Image style={{width: 45, height: 45}} source={require('../../assets/icons/filter-icon.png')} />
                </TouchableWithoutFeedback>
            </View>
            <View>
                <TextInput
                    style={{backgroundColor: "white", borderRadius: 50, height: 40, paddingHorizontal: 15, marginBottom: 10}}
                    placeholder='Search your motorcycle'
                />
            </View>
            <BottomSheetModal
                activeOffsetY={[-1, 1]}
                failOffsetX={[-5, 5]}
                ref={bottomSheetModalRef}
                index={0}
                snapPoints={[245]}
                backgroundStyle={{ borderRadius: 50, borderWidth: 4 }}
            >
                <Modal/>
            </BottomSheetModal>
        </View>
    )
}