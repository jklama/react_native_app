import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.header}>Create an Account</Text>
        <View style={styles.formGroup}>
          <Text style={styles.label}>First Name:</Text>
          <TextInput style={styles.input} placeholder="First Name" />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Last Name:</Text>
          <TextInput style={styles.input} placeholder="Last Name" />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Email:</Text>
          <TextInput style={styles.input} placeholder="Email" />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Password:</Text>
          <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Avatar:</Text>
          {/* In React Native, you may need to use a library for file input */}
          {/* Example: https://github.com/react-native-image-picker/react-native-image-picker */}
          {/* <YourFileInputComponent /> */}
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Date of Birth:</Text>
          <TextInput style={styles.input} placeholder="Date of Birth" />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>CAPTCHA:</Text>
          {/* Add CAPTCHA input here */}
        </View>
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  formContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    padding: 30,
    width: 400,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 3,
  },
  submitButton: {
    backgroundColor: '#ff5733',
    padding: 10,
    borderRadius: 3,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default App;
