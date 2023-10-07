import React,{useState} from 'react'
import {View,Text,Image} from 'react-native'
import {styles} from './maincss'
import { SafeAreaView } from 'react-native'
function Main() {
  return (
    <>
    <SafeAreaView style= { styles.main_icon_section}>
        <View style={styles.container_logo}>
          <Text style={styles.texts} >Dyeing app</Text>
        </View>
        <View style={styles.container}>
            <Text style={styles.texts}>Dyeing</Text>
        </View >
        <View style={styles.container}> 
            <Text style={styles.texts}>Carding</Text>
        </View>
        <View style={styles.container}>
            <Text style={styles.texts}>Washing</Text>
        </View>
    </SafeAreaView>
    </>
  )
}

export default Main