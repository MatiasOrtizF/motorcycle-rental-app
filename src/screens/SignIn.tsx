import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/Styles';
import { myColors } from '../styles/Colors';
import { login } from '../service/LoginService';
import { useRental } from '../hooks/rentalContext';
import { useState } from 'react';
import { config } from 'process';
import { AxiosRequestConfig } from 'axios';

export default function SignIn() {
    const {setConfig, setIsSinged, setUserData} = useRental();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validationEmail(email: string) {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return regexEmail.test(email);
    }

    const validationLogin = () => {
        const userData = {email, password}
        if(validationEmail(userData.email)) {
            login.validationCredentials(userData).then(response=> {
                setConfig({
                    headers: {
                        'Authorization': response.data.token,
                    }
                })
                setIsSinged(true);
                setUserData(response.data.user);
            }).catch(error=> {
                if (error.response.status === 401) {
                    alert(error.response.data);
                } else if(error.response.status === 400) {
                    alert(error.response.data);
                } else {
                    console.error("Error:", error);
                }
            })
        } else {
            alert("Please enter a valid email.")
        }
    }

    return (
        <ImageBackground style={{flex: 1, justifyContent:"flex-end"}} resizeMode='cover' blurRadius={2} source={{uri: "https://static.wixstatic.com/media/e56e44c02139459f9bb586b463704d82.jpg/v1/fill/w_640,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/e56e44c02139459f9bb586b463704d82.jpg"}}>
            <View style={{padding: 15}}>
                <Text style={{color: myColors.light, fontSize: 28, fontWeight: "bold", marginBottom: 15}}>Sign In</Text>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.inputText}
                    placeholder='email'
                    placeholderTextColor={'white'}
                    onChangeText={setEmail}
                    autoCapitalize='none'
                    onSubmitEditing={validationLogin}
                />
                <Text style={styles.label}>Password</Text>
                <TextInput
                    style={styles.inputText}
                    placeholder='password'
                    placeholderTextColor={'white'}
                    onChangeText={setPassword}
                    autoCapitalize='none'
                    secureTextEntry={true}
                    onSubmitEditing={validationLogin}
                />
                <TouchableOpacity onPress={()=> validationLogin()} style={{backgroundColor: "orange", alignSelf:"flex-end", paddingVertical: 5, paddingHorizontal: 10, borderRadius: 15, marginTop: 10}}>
                    <Text style={{color: myColors.light}}>Submit</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}