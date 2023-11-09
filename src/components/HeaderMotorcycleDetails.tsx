import { Image, View, Text, TouchableOpacity } from "react-native";
import { useRental } from "../hooks/rentalContext";

export default function HeaderMotorcycleDeatils() {
    const {saveMotorcycle} = useRental();

    return(
        <View style={{flexDirection: "row", justifyContent :"space-between", width: "100%", alignItems: "center"}}>
            <Text style={{fontWeight: "600", fontSize: 20}}>Motorcycle Details</Text>
            <TouchableOpacity onPress={()=> console.log("save post")}>
                <Image style={{width: 25, height: 25}} source={require('../../assets/icons/save-icon.png')} />
            </TouchableOpacity>
        </View>
    )
}