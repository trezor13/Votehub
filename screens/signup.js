import React, { useState } from 'react';
import { StyleSheet, Pressable, TouchableOpacity, Text, View, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Signup() {
  const navigation = useNavigation();

  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [nationalId, setNationalId] = useState('');

  const [errors, setErrors] = useState({
    fullName: '',
    address: '',
    email: '',
    phone: '',
    nationalId: '',
  });

  const handleLoginPress = () => {
    navigation.navigate('login'); // Navigate to the 'Login' screen
  };

  const handleSignupPress = () => {
    const validationErrors = {};

    // Validate full name
    if (!fullName) {
      validationErrors.fullName = 'Full name is required';
    }

    // Validate address
    if (!address) {
      validationErrors.address = 'Address is required';
    }

    // Validate email
    if (!email) {
      validationErrors.email = 'Email is required';
    } else if (!isValidEmail(email)) {
      validationErrors.email = 'Invalid email format';
    }

    // Validate phone number
    if (!phone) {
      validationErrors.phone = 'Phone number is required';
    } else if (!isValidPhoneNumber(phone)) {
      validationErrors.phone = 'Phone number must be 10 digits';
    }

    // Validate national ID
    if (!nationalId) {
      validationErrors.nationalId = 'National ID is required';
    } else if (!isValidNationalId(nationalId)) {
      validationErrors.nationalId = 'National Id must be 16 digits';
    }

    setErrors(validationErrors);

    // If there are no validation errors, navigate to the login screen
    if (Object.keys(validationErrors).length === 0) {
      navigation.navigate('login');
    }
  };

  const isValidEmail = (email) => {
    // Use a regular expression or any other validation method to check email format
    // Return true if the email is valid, false otherwise
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPhoneNumber = (phone) => {
    // Use a regular expression or any other validation method to check phone number format
    // Return true if the phone number is valid, false otherwise
    return /^\d{10}$/.test(phone);
  };

  const isValidNationalId = (nationalId) => {
    // Use a regular expression or any other validation method to check national ID format
    // Return true if the national ID is valid, false otherwise
    return /^\d{16}$/.test(nationalId);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.Header}>Sign Up</Text>
        <View style={styles.login}>
          <Text style={{ fontSize: 18, opacity: 0.5 }}>Already have an account?</Text>
          <Pressable onPress={handleLoginPress}>
            <Text style={styles.signup}>Login</Text>
          </Pressable>
        </View>
        <View style={styles.form}>
          <Text style={styles.label}>Full names</Text>
          <TextInput
            style={styles.input}
            placeholder="Your names"
            value={fullName}
            onChangeText={setFullName}
            required={true}
          />
          {errors.fullName && <Text style={styles.error}>{errors.fullName}</Text>}
        </View>
        <View>
          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Your address"
            value={address}
            onChangeText={setAddress}
            required={true}
          />
          {errors.address && <Text style={styles.error}>{errors.address}</Text>}
        </View>
        <View>
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
          <Text style={styles.label}>Phone</Text>
          <TextInput
            style={styles.input}
            placeholder="Your phone"
            value={phone}
            onChangeText={setPhone}
            required={true}
            keyboardType="phone-pad"
          />
          {errors.phone && <Text style={styles.error}>{errors.phone}</Text>}
        </View>
        <View>
          <Text style={styles.label}>National ID</Text>
          <TextInput
            style={styles.input}
            placeholder="Your national ID"
            value={nationalId}
            onChangeText={setNationalId}
            required={true}
            keyboardType="numeric"
          />
          {errors.nationalId && <Text style={styles.error}>{errors.nationalId}</Text>}
        </View>
        <View>
          <TouchableOpacity style={styles.button} onPress={handleSignupPress}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
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
    marginTop: 30,
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
    marginTop: 10,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    height: 45,
    padding: 10,
    borderRadius: 8,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    marginTop: 10,
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
    fontSize: 16,
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    marginTop: 5,
  },
});
