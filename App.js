import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import Signup from './src/components/signup';
const App = () => {
  const [statt, setstatt] = useState(false)
  return (
    <View style={{ backgroundColor: '#511be3', height: '100%' }}>
      <View style={{}}>
        <Text style={{ marginLeft: 40, fontSize: 35, color: '#ffffff', paddingTop: '40%' }}>
          Welcome
        </Text>
      </View>
      {
        statt ? (
          <View style={{ backgroundColor: '#ffffff', marginTop: 40, borderTopStartRadius: 30, height: '100%', borderTopEndRadius: 30, }}>
            <Text style={{ marginLeft: 40, fontSize: 35, color: '#000', paddingTop: 40, }}>
              Login
            </Text>
            <TextInput placeholder={'Email'} value={Text} style={styles.textInput} />
            <TextInput placeholder={'Password'} secureTextEntry={true} style={styles.passwordText} />
            <TouchableOpacity><Text style={styles.buttonLogin}> Login</Text>
            </TouchableOpacity>
            <Text style={styles.createAccount}>Create an account?
              <Text onPress={() => setstatt(!statt)} style={styles.signupText}>    Signup</Text>
            </Text>
          </View>

        ) : (
          <View style={{ backgroundColor: '#ffffff', marginTop: 40, borderTopStartRadius: 30, height: '100%', borderTopEndRadius: 30, }}>
            <Text style={{ marginLeft: 40, fontSize: 35, color: '#000', paddingTop: 40, }}>
              Sign Up
            </Text>
            <TextInput placeholder={'Full Name'} value={Text} style={styles.textInput} />
            <TextInput placeholder={'Email'} value={Text} style={styles.textInput} />
            <TextInput placeholder={'Password'} secureTextEntry={true} style={styles.passwordText} />
            <TouchableOpacity><Text style={styles.buttonLogin}> Sign Up</Text>
            </TouchableOpacity>
            <Text style={styles.createAccount}>already have an account ?
              <Text onPress={() => setstatt(!statt)} style={styles.signupText}>    Login </Text>
            </Text>
          </View>
        )
      }


    </View>
  );
};
const styles = StyleSheet.create({
  signupText: {
    marginTop: 20,
    color: '#511be3',
    fontSize: 24,
  },
  createAccount: {
    marginLeft: '18%',
    marginTop: 20,
    color: '#000',
    fontSize: 16
  },
  textInput: {
    marginLeft: 40,
    marginTop: 25,
    fontSize: 16,
    backgroundColor: '#ffffff',
    borderRadius: 3,
    marginRight: 40,
    borderBottomColor: '#511be3',
    borderBottomWidth: 2

  },
  passwordText: {
    borderBottomColor: '#511be3',
    backgroundColor: '#ffffff',
    borderBottomWidth: 2,
    borderRadius: 3,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 30,
    fontSize: 16,
  },
  buttonLogin: {
    borderColor: 'black',
    backgroundColor: '#511be3',
    borderRadius: 20,
    borderBottomWidth: 2,
    borderTopWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    width: 200,
    marginLeft: '21.5%',
    textAlign: 'center',
    color: '#ddd',
    padding: 10,
    marginTop: 50
  }
});
export default App;



