import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/Styles';
import { myColors } from '../styles/Colors';

export default function SignUp() {
    return (
        <ImageBackground style={{flex: 1, justifyContent:"flex-end"}} resizeMode='cover' blurRadius={2} source={{uri: "https://static.wixstatic.com/media/e56e44c02139459f9bb586b463704d82.jpg/v1/fill/w_640,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/e56e44c02139459f9bb586b463704d82.jpg"}}>
            <View style={{padding: 15}}>
                <Text style={{color: myColors.light, fontSize: 28, fontWeight: "bold", marginBottom: 15}}>Sign Up</Text>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.inputText}
                    placeholder='email'
                    placeholderTextColor={'white'}
                />
                <Text style={styles.label}>Password</Text>
                <TextInput
                    style={styles.inputText}
                    placeholder='password'
                    placeholderTextColor={'white'}
                />
                <Text style={styles.label}>Confirm Passowrd</Text>
                <TextInput
                    style={styles.inputText}
                    placeholder='confirm password'
                    placeholderTextColor={'white'}
                />
                <TouchableOpacity style={{backgroundColor: "orange", alignSelf:"flex-end", paddingVertical: 5, paddingHorizontal: 10, borderRadius: 15, marginTop: 10}}>
                    <Text style={{color: myColors.light}}>Submit</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}