import { StyleSheet,Pressable,TouchableOpacity, Text, View, Image, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function (){
    const navigation = useNavigation();
    const handleLoginPress = () => {
        navigation.navigate('signup'); // Navigate to the 'Login' screen
      };
    return (
        <View style = {styles.container}>
            <Text style = {styles.Header}>Sign Up</Text>
            <View style = {styles.login}>
            <Text style = {{fontSize: 18, opacity: 0.5}}>Already have an account?</Text>
            <Pressable onPress={handleLoginPress}>
            <Text style = {styles.signup}>Sign Up</Text>
            </Pressable>
            </View>
            <View style = {styles.form}>
                <Text style = {styles.label}>
                    Email
                </Text>
                <TextInput style = {styles.input} placeholder='your names'/>
            </View> 
            <View>
                <Text style = {styles.label}>
                    Password
                </Text>
                <TextInput style = {styles.input} placeholder='your national id'/>
            </View>
            <View>
              <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sign Up</Text>
              </TouchableOpacity>
    </View>       
        </View>
    );
}
const styles = StyleSheet.create({
    container: { 
        width: "100%", 
        height: "100%",
        backgroundColor: '#fff',
        marginLeft: 40
    },
    Header: {
        fontSize: 30,
        fontWeight: 'bold', 
        marginTop: 120,
   
    },
    login: {
        flexDirection: 'row',
        
        marginTop: 10,

    },
    signup: {
        fontSize: 18,
        marginLeft: 8,
        color: '#223458',
    },
    form: {
        marginTop: 20,

    },
    label: {
        fontSize: 20,
        marginTop: 40,
    }, 
    input: {
       height: 60,
      width: '80%',
      borderWidth: 1,
      padding: 10,
      borderRadius: 16,
      borderColor: 'rgba(0, 0, 0, 0.5)', 
      marginTop: 30,
      fontSize: 18
    },
    submit: {
        backgroundColor: 'red',
        width: '80%',
        height: 60,
        Top: 28,
        
    },
    button: {
    backgroundColor: '#223458',
    padding: 10,
    borderRadius: 28,
    height: 60,
    width: '80%',
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center'

    },
    buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
},
})