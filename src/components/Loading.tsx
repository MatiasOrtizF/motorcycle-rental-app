import { View, ActivityIndicator } from "react-native";
import { myColors } from "../styles/Colors";

export default function Loading() {
    return(
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <ActivityIndicator size="large" color={myColors.dark}/>
        </View>
    )
}