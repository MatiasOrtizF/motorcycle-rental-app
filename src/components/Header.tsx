import { FlatList, Text, View, TextInput, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function Header() {
    return(
        <View style={{paddingHorizontal: 8}}>
            <View style={{flexDirection: "row", marginBottom: 15, marginTop: 5, justifyContent: "space-between"}}>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Image style={{width: 45, height: 45, borderRadius: 50, marginRight: 7}} source={{uri: `https://i.pravatar.cc/150?u=${"JuanPerez"}`}}/>
                    <View>
                        <Text>Welcome 👋</Text>
                        <Text style={{fontWeight: "600", fontSize: 16}}>Juan Perez</Text>
                    </View>
                </View>
                <TouchableWithoutFeedback onPress={()=> console.log("hola")}>
                    <Image style={{width: 45, height: 45}} source={require('../../assets/icons/filter-icon.png')} />
                </TouchableWithoutFeedback>
            </View>
            <View>
                <TextInput
                    style={{backgroundColor: "white", borderRadius: 50, height: 40, paddingHorizontal: 15, marginBottom: 10}}
                    placeholder='Search your motorcycle'
                />
            </View>
        </View>
    )
}