import { Text, View, SafeAreaView, Platform, TouchableOpacity, ImageBackground, Image } from "react-native";
import Constants from 'expo-constants';
import { myColors } from "../styles/Colors";

export default function MotorcycleDetail() {

    const marginTop = Platform.OS === 'android' ? Constants.statusBarHeight : 0;

    return(
        <SafeAreaView style={{flex: 1, backgroundColor: "white"}}>
            <View style={{marginTop, flex: 1}}>
                <ImageBackground style={{width: "100%", height: 200}} source={{uri: "https://d56b293rhv8dp.cloudfront.net/vehicle_models/7/images/size550/harley-davidson-electra-glide-limited-for-rent.jpg?1679604108"}}/>
                <View style={{padding: 10, borderTopLeftRadius: 20, borderTopRightRadius: 20, backgroundColor: "gray", flex: 1, marginTop: 20}}>
                    <Text style={{fontSize: 20, fontWeight: "700", alignSelf: "center"}}>Tesla Model 3</Text>

                    <View>
                        <Text style={{fontWeight: "600", fontSize: 18}}>Rating</Text>
                        <View style={{flexDirection: "row"}}>
                            <Image style={{width: 20, height: 20}} source={require('../../assets/icons/star-icon-2.png')}/>
                            <Image style={{width: 20, height: 20}} source={require('../../assets/icons/star-icon-2.png')}/>
                            <Image style={{width: 20, height: 20}} source={require('../../assets/icons/star-icon-2.png')}/>
                            <Image style={{width: 20, height: 20}} source={require('../../assets/icons/star-icon-2.png')}/>
                            <Image style={{width: 20, height: 20}} source={require('../../assets/icons/star-half-icon-2.png')}/>
                        </View>
                    </View>

                    <View>
                        <Text style={{fontWeight: "600", fontSize: 18}}>Features</Text>
                        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                            <View style={{backgroundColor: "white", marginHorizontal: 5, borderRadius: 10, padding: 10}}>
                                <Text>Length</Text>
                                <Text>2,400 mm</Text>
                            </View>
                            <View style={{backgroundColor: "white", marginHorizontal: 5, borderRadius: 10, padding: 10}}>
                                <Text>Torque</Text>
                                <Text>145 Nm</Text>
                            </View>
                            <View style={{backgroundColor: "white", marginHorizontal: 5, borderRadius: 10, padding: 10}}>
                                <Text>Weight</Text>
                                <Text>168 kg</Text>
                            </View>
                            <View style={{backgroundColor: "white", marginHorizontal: 5, borderRadius: 10, padding: 10}}>
                                <Text>FUEL CAPACITY</Text>
                                <Text>22.7 lts</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                        <View>
                            <Text>Price</Text>
                            <Text>$450 per day</Text>
                        </View>
                        <TouchableOpacity style={{backgroundColor: myColors.dark, width: "100%"}}>
                            <Text style={{color: "white"}}>Rental now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}