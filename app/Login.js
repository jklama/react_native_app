import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.login}>
          <Text style={styles.loginHeader}>Sign in to your account</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Email"
            placeholderTextColor="#ccc"
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            secureTextEntry={true}
            placeholderTextColor="#ccc"
          />
          <Text style={styles.forgotPassword}>Login</Text>
          <TouchableOpacity>
            <Text style={styles.forgotPassword} ><Link href="./ForgotPassword">Forgot Password</Link></Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.or}>or</Text>

        <View style={styles.signin}>
          <Text style={styles.signinHeader}><Link href="./createAccount">Create an account</Link></Text>
        </View>
        <View style={styles.signin}>
          <Text style={styles.signinHeader}><Link href="./masterPage">go to master page</Link></Text>
        </View>
        <View style={styles.signin}>
          <Text style={styles.signinHeader}><Link href="./notifications">go to notifications page</Link></Text>
        </View>
        <View style={styles.signin}>
          <Text style={styles.signinHeader}><Link href="./jobPage">go to jobPage page</Link></Text>
        </View>
        <View style={styles.signin}>
          <Text style={styles.signinHeader}><Link href="./settings">go to settings page</Link></Text>
        </View>
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
  main: {
    width: 300,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    alignItems: 'center',
  },
  login: {
    width: '100%',
    textAlign: 'center',
  },
  loginHeader: {
    color: '#333',
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 3,
    textAlign: 'center',
  },
  forgotPassword: {
    color: '#ff5733',
    textDecorationLine: 'underline',
    transition: 'color 0.3s',
  },
  or: {
    fontSize: 20,
    marginVertical: 10,
  },
  signin: {
    width: '100%',
    textAlign: 'center',
  },
  signinHeader: {
    fontSize: 20,
  },
});

export default App;
