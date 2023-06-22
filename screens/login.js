import React, { useState } from 'react';
import { StyleSheet, Pressable, TouchableOpacity, Text, View, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState({
    email: '',
  });

  const handleSignupPress = () => {
    navigation.navigate('signup'); // Navigate to the 'Login' screen
  };



  const handleLoginPress = () => {
    const validationErrors = {};

    // Validate email
    if (!email) {
      validationErrors.email = 'Email is required';
    } else if (!isValidEmail(email)) {
      validationErrors.email = 'Invalid email format';
    }

    setErrors(validationErrors);

    // If there are no validation errors, navigate to the signup screen
    if (Object.keys(validationErrors).length === 0) {
      navigation.navigate('signup');
    }
  };

  const isValidEmail = (email) => {
    // Use a regular expression or any other validation method to check email format
    // Return true if the email is valid, false otherwise
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Header}>Login</Text>
      <View style={styles.login}>
        <Text style={{ fontSize: 18, opacity: 0.5 }}>Already have an account?</Text>
        <Pressable onPress={handleSignupPress}>
          <Text style={styles.signup}>Sign Up</Text>
        </Pressable>
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Your email"
          value={email}
          onChangeText={setEmail}
          required={true}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {errors.email && <Text style={styles.error}>{errors.email}</Text>}
      </View>
      <View>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Your password"
          value={password}
          onChangeText={setPassword}
          required={true}
          secureTextEntry={true}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    marginLeft: 40,
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
    fontSize: 18,
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
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    marginTop: 5,
  },
});
