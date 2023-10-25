import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useRental } from "./src/hooks/rentalContext";

//Screens
import SignIn from "./src/screens/SignIn";
import SignUp from "./src/screens/SignUp";

import Home from "./src/screens/Home";
import Profile from "./src/screens/Profile";
import Save from "./src/screens/Save";
import MyRentals from "./src/screens/MyRentals";
import MotorcycleDetails from "./src/screens/Motorcycle-Details";

const Tab = createBottomTabNavigator();

export default function Navigation() {
    const { isSinged } = useRental();

    return(
        isSinged ?
            <NavigationContainer>
                <Tab.Navigator screenOptions={{headerShown: false}}>
                    <Tab.Screen name="Home" component={Home}/>
                    <Tab.Screen name="Save" component={Save}/>
                    <Tab.Screen name="Profile" component={Profile}/>
                </Tab.Navigator>
            </NavigationContainer>
        :
            <NavigationContainer>
                    <Tab.Navigator screenOptions={{headerShown: false}}>
                        <Tab.Screen name="SignIn" component={SignIn} options={{tabBarLabel: "Sign In"}}/>
                        <Tab.Screen name="SignUp" component={SignUp} options={{tabBarLabel: "Sign Up"}}/>
                    </Tab.Navigator>
            </NavigationContainer>
    )
}