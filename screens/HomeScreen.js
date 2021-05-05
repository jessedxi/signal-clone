import { auth } from "../firebase";
import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, SafeAreaView, ScrollView, View, TouchableOpacity } from 'react-native'
import CustomListItem from './CustomListItem'
import { Avatar } from "react-native-elements"


const HomeScreen = ({ navigation }) => {

  const signOutUser = () => {
    auth.signOut().then(() => {
      navigation.replace("Login");
    })
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Signal",
      headerStyle: { backgroundColor: "#fff" },
      headerTitleStyle: { color: "black" },
      headerTintColor: "black",
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
            <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);



  return (
    <SafeAreaView>
      <ScrollView>
        <CustomListItem />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
