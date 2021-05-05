import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import { Button, Input, Image } from "react-native-elements";
import { auth } from '../firebase';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace("Home");
      }
    });

    return unsubscribe;
  }, []);

  const signIn = () => {

  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Image source={{
        uri:
          "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png"
      }}
        style={{ width: 200, height: 200 }}
      />
      <View style={styles.inputContainer}>
        <Input placeholder="Email" autoFocus type="Email"
          onChangeText={(text) => setEmail(text)} />
        <Input placeholder="Password" 
        secureTextEntry 
        type="password"
        onChangeText={(text) => setPassword(text)} 
        onSubmitEditing={signIn}/>
      </View>

      <Button  containerStyle={styles.button} 
      title="Login" 
      onPress={signIn} 
      />
      <Button 
      onPress={() => navigation.navigate("Register")}
      containerStyle={styles.button} 
      title="Register" 
      type="outline"/>
      <View style={{height: 100}} />
    </KeyboardAvoidingView>
  )
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  inputContainer: {
    width: 300
  },
  button: {
    width: 200,
    marginTop: 10
  }
})
