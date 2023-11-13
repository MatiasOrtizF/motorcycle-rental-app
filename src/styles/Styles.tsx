import { StyleSheet } from 'react-native';
import { myColors } from './Colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        backgroundColor: myColors.dark, 
        alignItems: "center", 
        padding: 10, 
        borderRadius: 50
    },
    btnText: {
        fontWeight: "700", 
        fontSize: 17, 
        color:myColors.light
    },
    //login
    label: {
        color: 'orange',
        fontWeight: '600',
        fontSize: 17
    },
    inputText: {
        color: myColors.light,         
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#FF9526',
        marginVertical: 5,
    },
})

export default styles;