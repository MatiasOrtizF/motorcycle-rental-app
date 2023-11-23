import { Text, View, SafeAreaView, Platform, TouchableOpacity } from "react-native";
import Constants from 'expo-constants';
import { myColors } from "../styles/Colors";
import { Switch, TextInput } from "react-native-gesture-handler";
import styles from "../styles/Styles";
import { useRental } from "../hooks/rentalContext";

export default function Configuration() {
    const {darkMode, setDarkmode} = useRental();

    const marginTop = Platform.OS === 'android' ? Constants.statusBarHeight : 0;

    const toggleSwitch = () => setDarkmode(!darkMode);

    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={{marginTop, paddingHorizontal: 10, backgroundColor: myColors.bgLigth, flex:1}}>
                <Text>Name</Text>
                <TextInput
                    placeholder="Name"
                />
                <Text>LastName</Text>
                <TextInput
                    placeholder="Name"
                />
                <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                    <Text>{darkMode ? "True" : "False"}</Text>
                    <Text>Dark Mode</Text>
                    <Switch
                        trackColor={{false: '#767577', true: '#81b0ff'}}
                        thumbColor={darkMode ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={darkMode}
                    />
                </View>
                <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>Confirm</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}