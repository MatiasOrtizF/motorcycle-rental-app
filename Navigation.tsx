import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useRental } from "./src/hooks/rentalContext";

//Screens
import SignIn from "./src/screens/SignIn";
import SignUp from "./src/screens/SignUp";

import Home from "./src/screens/Home";
import Profile from "./src/screens/Profile";
import Save from "./src/screens/Save";
import MyRentals from "./src/screens/MyRentals";
import MotorcycleDetail from "./src/screens/Motorcycle-Detail";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigation() {
    const { isSinged } = useRental();
    return(
        isSinged ?
            <Tab.Navigator screenOptions={{headerShown: false}}>
                <Tab.Screen name="Home" component={Home}/>
                <Tab.Screen name="Save" component={Save}/>
                <Tab.Screen name="Profile" component={Profile}/>
            </Tab.Navigator>
            :
            <Tab.Navigator screenOptions={{headerShown: false}}>
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
                <Stack.Screen name="MotorcycleDetail" component={MotorcycleDetail}/>
                <Stack.Screen name="MyRentals" component={MyRentals}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}