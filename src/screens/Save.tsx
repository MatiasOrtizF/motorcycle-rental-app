import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Text, View, TextInput, TouchableOpacity, Platform, SafeAreaView, Image } from 'react-native';
import styles from '../styles/Styles';
import { myColors } from '../styles/Colors';
import Constants from 'expo-constants';

export default function Save() {
    const marginTop = Platform.OS === 'android' ? Constants.statusBarHeight : 0;

    return (
        <SafeAreaView>
            <View style={{marginTop, paddingHorizontal: 18}}>
                <View style={{ backgroundColor: "white", marginVertical: 9, flexDirection: "row", borderRadius: 20, overflow: "hidden", paddingVertical: 5}}>
                    <View style={{width: "50%"}}>
                        <Image style={{width: "100%", height: 100}} source={{uri: "https://d56b293rhv8dp.cloudfront.net/vehicle_models/7/images/size550/harley-davidson-electra-glide-limited-for-rent.jpg?1679604108"}}></Image>
                    </View>
                    <View style={{alignItems: "flex-end", width: "50%", paddingHorizontal: 10, justifyContent: "space-between"}}>
                        <Text style={{fontWeight: 'bold'}}>Tesla Model 3</Text>
                        <Text>$/per day</Text>
                        <View style={{flexDirection: "row"}}>
                            <TouchableOpacity style={{marginRight: 5, backgroundColor: myColors.dark, paddingHorizontal: 15 , paddingVertical: 5, borderRadius: 50}}>
                                <Text style={{color: myColors.light}}>Rental</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: "gray", width: 30, height: 30, borderRadius: 50, justifyContent: "center",alignItems: "center",}}>
                                <Image style={{width: 15, height: 15}} source={require('../../assets/icons/saved-icon.png')}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{ backgroundColor: "white", marginVertical: 9, flexDirection: "row", borderRadius: 20, overflow: "hidden", paddingVertical: 5}}>
                    <View style={{width: "50%"}}>
                        <Image style={{width: "100%", height: 100}} source={{uri: "https://d56b293rhv8dp.cloudfront.net/vehicle_models/7/images/size550/harley-davidson-electra-glide-limited-for-rent.jpg?1679604108"}}></Image>
                    </View>
                    <View style={{alignItems: "flex-end", width: "50%", paddingHorizontal: 10, justifyContent: "space-between"}}>
                        <Text style={{fontWeight: 'bold'}}>Tesla Model 3</Text>
                        <Text>$/per day</Text>
                        <View style={{flexDirection: "row"}}>
                        <TouchableOpacity style={{marginRight: 5, backgroundColor: myColors.dark, paddingHorizontal: 15 , paddingVertical: 5, borderRadius: 50}}>
                                <Text style={{color: myColors.light}}>Rental</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: "gray", width: 30, height: 30, borderRadius: 50, justifyContent: "center",alignItems: "center",}}>
                                <Image style={{width: 15, height: 15}} source={require('../../assets/icons/saved-icon.png')}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}