import { Text, View, SafeAreaView, Platform, TouchableOpacity } from "react-native";
import Constants from 'expo-constants';
import { myColors } from "../styles/Colors";

export default function MyRentals() {

    const marginTop = Platform.OS === 'android' ? Constants.statusBarHeight : 0;

    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={{marginTop, alignItems: "center", paddingHorizontal: 10, backgroundColor: myColors.bgLigth, flex:1}}>
                <Text style={{fontWeight: 500, fontSize: 17, alignSelf: "flex-start", marginVertical: 5}}> My Rentals </Text>
                <TouchableOpacity style={{flexDirection: "row", justifyContent: "space-between", width: "100%", backgroundColor: "white", padding: 10, borderRadius: 10, marginVertical: 8}}>
                    <View>
                        <Text>Motorcycle name</Text>
                        <Text>23 May, 2023</Text>
                    </View>
                    <View style={{alignItems: "flex-end"}}>
                        <Text>$200</Text>
                        <Text>20-12-2023 / 22-12-2023</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}