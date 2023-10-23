import { Text, View, SafeAreaView, Platform, TouchableOpacity, ImageBackground } from "react-native";
import Constants from 'expo-constants';
import { myColors } from "../styles/Colors";

export default function MyMotorcycles() {

    const marginTop = Platform.OS === 'android' ? Constants.statusBarHeight : 0;

    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={{marginTop, flex: 1}}>
                <ImageBackground style={{width: "100%", height: 200}} source={{uri: "https://d56b293rhv8dp.cloudfront.net/vehicle_models/7/images/size550/harley-davidson-electra-glide-limited-for-rent.jpg?1679604108"}}/>
            </View>
        </SafeAreaView>
    )
}