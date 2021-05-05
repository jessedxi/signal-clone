import React from 'react'
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native'
import CustomListItem from './CustomListItem'


const HomeScreen = () => {
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
