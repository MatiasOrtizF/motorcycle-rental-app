import { Text, View, SafeAreaView, Platform, TouchableOpacity } from "react-native";
import Constants from 'expo-constants';
import { myColors } from "../styles/Colors";
import { useRental } from "../hooks/rentalContext";
import { useEffect } from "react";

export default function MyRentals() {
    const {myRentalsByUser, myRentals} = useRental();

    useEffect(()=> {
        myRentalsByUser();
    },[])

    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={{alignItems: "center", paddingHorizontal: 10, backgroundColor: myColors.bgLigth, flex:1}}>
                {/* <Text style={{fontWeight: "500", fontSize: 17, alignSelf: "flex-start", marginVertical: 5}}> My Rentals </Text> */}
                {myRentals.map((myRental)=> (
                <TouchableOpacity key={myRental.id} style={{flexDirection: "row", justifyContent: "space-between", width: "100%", backgroundColor: "white", padding: 10, borderRadius: 10, marginVertical: 8}}>
                    <View style={{width: "50%"}}>
                        <Text>{myRental.motorcycle.motorcycleName}</Text>
                        {/* <Text>23 May, 2023</Text> */}
                    </View>
                    <View style={{alignItems: "flex-end", justifyContent: "flex-end"}}>
                        <Text>$200</Text>
                        <Text>{myRental.dateRental ? new Date(myRental.dateRental).toLocaleDateString(): "n/a"} - {myRental.dateReturn ? new Date(myRental.dateReturn).toLocaleDateString(): "n/a"}</Text>
                    </View>
                </TouchableOpacity>
                ))}
            </View>
        </SafeAreaView>
    )
}