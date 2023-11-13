import Slider from '@react-native-community/slider';
import { Text, View, TouchableOpacity } from 'react-native';
import { useRental } from '../hooks/rentalContext';

export default function Modal () {
    const {priceRange, setPriceRange, gpsSelected, setGpsSelected} = useRental();

    const gpsButtons = [
        {title: 'All', value: "all"},
        {title: 'GPS', value: true},
        {title: 'No GPS', value: false},
    ]

    return(
        <View style={{paddingHorizontal: 15, alignItems:"center"}}>
            <Text style={{marginBottom: 15, fontSize: 19, fontWeight: "800"}}>Filter your search</Text>
            <Text style={{fontSize: 17, fontWeight: "800"}}>Min Price Range</Text>
            <Slider 
                style={{width: "100%", height: 40}}
                minimumValue={0}
                maximumValue={350}
                value={priceRange}
                onValueChange={(value)=> setPriceRange(value)}
                maximumTrackTintColor='black'
                minimumTrackTintColor='black'
                thumbTintColor='black'
            />
            <Text style={{fontWeight: "600"}}>${priceRange.toFixed(0)}/per day</Text>
            <Text style={{marginTop: 15, marginBottom: 8, fontSize: 17, fontWeight: "800"}}>GPS</Text>
            <View style={{flexDirection: "row", columnGap: 15}}>
                {gpsButtons.map((gpsBtn, index)=> (
                    <TouchableOpacity onPress={()=> setGpsSelected(gpsBtn.value)} key={index} style={{backgroundColor: gpsBtn.value.toString() === gpsSelected ? "orange" : "transparent", justifyContent:"center", alignItems:"center", borderColor:gpsBtn.value.toString() === gpsSelected ? 'orange' : 'black', width:70, height: 30, borderWidth: 1, borderRadius: 5}}>
                        <Text style={{fontWeight: "600"}}>{gpsBtn.title}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}