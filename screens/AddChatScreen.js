import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Input, Icon } from "react-native-elements"

const AddChatScreen = ({ navigation }) => {
  const [input, setInput] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a new Chat",
      headerBackTitle: "Chats",
    })

  }, [navigation]);

  return (
    <View style={styles.container}>
      <Input placeholder="Enter a chat name"
        calue={input}
        onChangeText={(text) => setInput(text)}
        leftIcon={
          <Icon name="wechat" type="antdesign" size={24} color="black" />
        }
      />
    </View>
  )
};


export default AddChatScreen

const styles = StyleSheet.create({
  container: {

  }
})
