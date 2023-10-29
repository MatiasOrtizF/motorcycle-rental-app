import { Text, View, SafeAreaView, Platform, TouchableOpacity, Touchable, Image } from "react-native";
import Constants from 'expo-constants';
import { myColors } from "../styles/Colors";
import { useNavigation } from "@react-navigation/native"
import MyRentals from "./MyRentals";
import { RootStackParamList } from "../types/RootStackParamList";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export default function Profile({navigation}: any) {
    const marginTop = Platform.OS === 'android' ? Constants.statusBarHeight : 0;

    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={{paddingVertical: 20, marginTop, paddingHorizontal: 18, flex:1, justifyContent: "space-between"}}>
                <View>
                    <Text style={{alignSelf: "center", fontWeight: "700", fontSize: 17}}>Profile</Text>
                    <View style={{alignItems:"center", marginVertical: 20}}>
                        <Image style={{width: 100, height: 100, borderRadius: 50, marginVertical: 10}} source={{uri: `https://i.pravatar.cc/150?u=${"JuanPerez"}`}}/>
                        <Text style={{fontWeight: "600", fontSize: 20}}>Juan Perez</Text>
                        <Text style={{fontSize: 17}}>juan.perez@email.com</Text>
                    </View>
                </View>
                <View>
                    <TouchableOpacity onPress={()=> navigation.navigate("MyMotorcycles")} style={{flexDirection: 'row', width: "100%", backgroundColor: "white", padding: 15, borderRadius: 50, marginVertical: 8}}>
                        <Image style={{width: 20, height: 20}} source={require('../../assets/icons/my-motorcycles-icon.png')}/>
                        <Text style={{marginLeft: 5}}>My Motorcycles</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> navigation.navigate("MyRentals")} style={{flexDirection: 'row', width: "100%", backgroundColor: "white", padding: 15, borderRadius: 50, marginVertical: 8}}>
                        <Image style={{width: 20, height: 20}} source={require('../../assets/icons/my-rentals-icon.png')}/>
                        <Text style={{marginLeft: 5}}>My Rentals</Text>
                    </TouchableOpacity>
                </View>
                    <TouchableOpacity style={{backgroundColor: myColors.dark, width: "100%", alignItems: "center", padding: 10, borderRadius: 50}}>
                        <Text style={{fontWeight: "700", fontSize: 17, color:myColors.light}}>Log Out</Text>
                    </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}