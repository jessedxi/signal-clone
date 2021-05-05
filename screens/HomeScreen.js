
import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native'
import CustomListItem from './CustomListItem'


const HomeScreen = ({ navigation }) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      title: ""
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
