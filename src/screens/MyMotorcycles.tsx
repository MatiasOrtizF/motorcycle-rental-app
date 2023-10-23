import { Text, View, SafeAreaView, Platform, TouchableOpacity } from "react-native";
import Constants from 'expo-constants';
import { myColors } from "../styles/Colors";

export default function MyMotorcycles() {

    const marginTop = Platform.OS === 'android' ? Constants.statusBarHeight : 0;

    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={{marginTop, alignItems: "center", paddingHorizontal: 10, backgroundColor: myColors.bgLigth, flex:1}}>
                <Text style={{fontWeight: 700, fontSize: 17}}>Profile</Text>
                <Text style={{fontWeight: 600, fontSize: 20}}>Juan Perez</Text>
                <Text style={{fontSize: 17}}>juan.perez@email.com</Text>
                <Text style={{fontWeight: 500, fontSize: 17, alignSelf: "flex-start"}}> My Rentals: </Text>
                <View style={{flexDirection: "row", justifyContent: "space-between", width: "100%", backgroundColor: "white", padding: 10, borderRadius: 10, marginVertical: 8}}>
                    <View>
                        <Text>Motorcycle name</Text>
                        <Text>23 May, 2023</Text>
                    </View>
                    <View style={{alignItems: "flex-end"}}>
                        <Text>$200</Text>
                        <Text>20-12-2023 / 22-12-2023</Text>
                    </View>
                </View>
                <View style={{flexDirection: "row", justifyContent: "space-between", width: "100%", backgroundColor: "white", padding: 10, borderRadius: 10}}>
                    <View>
                        <Text style={{fontWeight: 600, fontSize: 15}}>Motorcycle name</Text>
                        <Text style={{color: "gray"}}>15 Apr, 2023</Text>
                    </View>
                    <View style={{alignItems: "flex-end"}}>
                        <Text style={{fontWeight: 600, fontSize: 15}}>$450</Text>
                        <Text style={{color: "gray"}}>5 May, 2023 / 10 May, 2023</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}