import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem, Avatar } from "react-native-elements";

const CustomListItem = () => {
  return (
    <ListItem>
      <Avatar 
      rounded
      source={{
        uri:
        "https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg"
      }}
      />
       <ListItem.Content>
         <ListItem.Title style={{ fontWeight: "800" }}>
           Chat
         </ListItem.Title>
         <ListItem.Subtitle numberOfLines={1}
         ellipsizeMode="tail"
         >
           This is a test subtitle
         </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  )
}

export default CustomListItem

const styles = StyleSheet.create({})
