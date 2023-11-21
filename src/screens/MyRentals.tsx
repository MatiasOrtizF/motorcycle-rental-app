import { Text, View, SafeAreaView, Platform, TouchableOpacity } from "react-native";
import Constants from 'expo-constants';
import { myColors } from "../styles/Colors";
import { useRental } from "../hooks/rentalContext";
import { useEffect } from "react";

export default function MyRentals() {
    const {myRentalsByUser, myRentals, cancelMyRental} = useRental();

    useEffect(()=> {
        myRentalsByUser();
    },[])

    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={{alignItems: "center", paddingHorizontal: 10, backgroundColor: myColors.bgLigth, flex:1}}>
                {/* <Text style={{fontWeight: "500", fontSize: 17, alignSelf: "flex-start", marginVertical: 5}}> My Rentals </Text> */}
                {myRentals.map((myRental)=> (
                    <View key={myRental.id} style={{width: "100%", marginVertical: 8}}>
                        <TouchableOpacity style={{flexDirection: "row", justifyContent: "space-between", width: "100%", backgroundColor: "white", padding: 10, borderRadius: 10}}>
                            <View style={{width: "50%"}}>
                                <Text>{myRental.motorcycle.motorcycleName}</Text>
                                {/* <Text>23 May, 2023</Text> */}
                            </View>
                            <View style={{alignItems: "flex-end", justifyContent: "flex-end"}}>
                                <Text>$200</Text>
                                <Text>{myRental.dateRental ? new Date(myRental.dateRental).toLocaleDateString(): "n/a"} - {myRental.dateReturn ? new Date(myRental.dateReturn).toLocaleDateString(): "n/a"}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> cancelMyRental(myRental.id)} style={{alignSelf:"flex-end", backgroundColor: "black", paddingVertical: 7, paddingHorizontal: 10, borderRadius: 10}}>
                            <Text style={{color: "white", fontWeight: "600"}}>
                                Cancel Rental
                            </Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        </SafeAreaView>
    )
}