import { useRef, useState } from 'react';
import { Text, View, TextInput, Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import Modal from './Modal';
import { useRental } from '../hooks/rentalContext';
import { myColors } from '../styles/Colors';

export default function Header() {
    const {darkMode, userData, searchByWord} = useRental();

    const [word, setWord] = useState<string>('');

    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const snapPoints = ["35%"];

    function handlePresentModal() {
        bottomSheetModalRef.current?.present();
    }

    return(
        <View style={{paddingHorizontal: 8}}>
            <View style={{flexDirection: "row", marginBottom: 15, marginTop: 5, justifyContent: "space-between"}}>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Image style={{width: 45, height: 45, borderRadius: 50, marginRight: 7}} source={{uri: `https://i.pravatar.cc/150?u=${userData.name + userData.lastName}`}}/>
                    <View>
                        <Text style={{color: darkMode ? myColors.light: myColors.dark}}>Welcome 👋</Text>
                        <Text style={{fontWeight: "600", fontSize: 16, color: darkMode ? myColors.light: myColors.dark}}>{userData.name + " " + userData.lastName}</Text>
                    </View>
                </View>
                <TouchableWithoutFeedback onPress={handlePresentModal}>
                    <Image style={{width: 45, height: 45, backgroundColor: darkMode ? "white" : null, borderRadius: darkMode ? 50 : null}} source={darkMode ? require(`../../assets/icons/filter-dark-icon.png`) :  require(`../../assets/icons/filter-icon.png`)} />
                </TouchableWithoutFeedback>
            </View>
            <View>
                <TextInput
                    style={{backgroundColor: "white", borderRadius: 50, height: 40, paddingHorizontal: 15, marginBottom: 10}}
                    placeholder='Search your motorcycle'
                    onChangeText={setWord}
                    autoCapitalize='none'
                    onSubmitEditing={()=> searchByWord(word)}
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