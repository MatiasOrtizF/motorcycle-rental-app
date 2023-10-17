import { StyleSheet } from 'react-native';
import { myColors } from './Colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
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
    }
})

export default styles;