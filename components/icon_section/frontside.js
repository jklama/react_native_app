import React,{useState} from 'react'
import {View,Text,Image} from 'react-native'
import {styles} from './maincss'
import { SafeAreaView } from 'react-native'
function Frontside() {
  return (
    <>
    <SafeAreaView style={styles.main_icon_section}>
    <View style={styles.container_logo}>
          <Text style={styles.texts} >Dyeing app</Text>
        </View>
        <View style={styles.container_logo}>
          <Text style={styles.texts} >Image</Text>
        </View>
    <View style={styles.container_logo}>
          <Text style={styles.texts} >Welcome</Text>
        </View>
    </SafeAreaView>
    </>
  )
}

export default Frontside