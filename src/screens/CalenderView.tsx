import { useRef } from 'react';
import { FlatList, Text, View, TextInput, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { Calendar } from 'react-native-calendars';

export default function CalendarView() {
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const snapPoints = ["25%", "48%", "75%"];

    function handlePresentModal() {
        bottomSheetModalRef.current?.present();
    }

    return(
        <Calendar/>
    )
}