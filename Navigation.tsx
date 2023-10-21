import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

//Screens
import SignIn from "./src/screens/SignIn";
import SignUp from "./src/screens/SignUp";

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return(
        <NavigationContainer>
            <Tab.Navigator screenOptions={{headerShown: false}}>
                <Tab.Screen name="SignIn" component={SignIn} options={{tabBarLabel: "Sign In"}}/>
                <Tab.Screen name="SignUp" component={SignUp} options={{tabBarLabel: "Sign Up"}}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}