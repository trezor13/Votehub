import { StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, {useEffect} from 'react';


export default function welcome(){

    const navigation = useNavigation();
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate("login");
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style = {styles.container}>
            <Image style = {styles.logo} source = {require('../assets/logo.png')}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: { 
        width: "100%", 
        height: "100%",
        backgroundColor: '#223458',
    },
    logo: {
        top: '42%',
        marginLeft: 150,
    }
})