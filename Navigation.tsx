import { Image, View, Text, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator , StackNavigationProp } from "@react-navigation/stack";
import { useRental } from "./src/hooks/rentalContext";
import { RootStackParamList } from "./src/types/RootStackParamList";

//Screens
import SignIn from "./src/screens/SignIn";
import SignUp from "./src/screens/SignUp";

import Home from "./src/screens/Home";
import Profile from "./src/screens/Profile";
import Save from "./src/screens/Save";
import MyRentals from "./src/screens/MyRentals";
import MotorcycleDetail from "./src/screens/MotorcycleDetail";
import MyMotorcycles from "./src/screens/MyMotorcycles";
import CalendarView from "./src/screens/CalenderView";

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator<RootStackParamList>();

function TabNavigation() {
    const { isSinged } = useRental();
    return(
        isSinged ?
            <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown: false, tabBarLabel: ()=> null}}>
                <Tab.Screen name="Home" component={Home}options={{
                    tabBarIcon: ({focused}) => (
                        focused ?
                        <Image
                            style={{width: 28, height: 28}}
                            source={require('./assets/icons/home-actived-icon.png')}
                        />
                        :
                        <Image
                            style={{width: 28, height: 28}}
                            source={require('./assets/icons/home-icon.png')}
                        />
                    ),
                }}/>
                <Tab.Screen name="Save" component={Save} options={{
                    tabBarIcon: ({focused}) => (
                        focused ?
                        <Image
                            style={{width: 25, height: 25}}
                            source={require('./assets/icons/saved-icon.png')}
                        />
                        :
                        <Image
                            style={{width: 25, height: 25}}
                            source={require('./assets/icons/save-icon.png')}
                        />
                    ),
                }}/>
                <Tab.Screen name="Profile" component={Profile} options={{
                    tabBarIcon: ({focused}) => (
                            focused ?
                            <Image
                                style={{width: 33, height: 34}}
                                source={require('./assets/icons/profile-actived-icon.png')}
                            />
                            :
                            <Image
                                style={{width: 33, height: 34}}
                                source={require('./assets/icons/profile-icon.png')}
                            />
                        ),
                }}/>
            </Tab.Navigator>
            :
            <Tab.Navigator screenOptions={{headerShown: false, tabBarIcon: ()=> null, tabBarInactiveBackgroundColor: "black", tabBarActiveBackgroundColor: "orange", tabBarLabelPosition: "beside-icon", tabBarLabelStyle: {fontSize: 16, color: "white"}, tabBarStyle: {borderColor: "black"}}}>
                <Tab.Screen name="SignIn" component={SignIn} options={{tabBarLabel: "Sign In"}}/>
                <Tab.Screen name="SignUp" component={SignUp} options={{tabBarLabel: "Sign Up"}}/>
            </Tab.Navigator>
    )
}

export default function Navigation() {

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="TabNavigation" component={TabNavigation} options={{headerShown: false}}/>
                <Stack.Screen name="MotorcycleDetail" component={MotorcycleDetail} options={{headerTitle: 'Motorcycle Details'}}/>
                <Stack.Screen name="MyMotorcycles" component={MyMotorcycles}/>
                <Stack.Screen name="MyRentals" component={MyRentals}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}