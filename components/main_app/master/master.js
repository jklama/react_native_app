import React,{useState} from 'react'
import {View,Text,Image} from 'react-native'
import {styles} from '../../icon_section/maincss'
import { SafeAreaView } from 'react-native'
import { useRouter } from 'expo-router'
import { TextInput,TouchableOpacity } from 'react-native'

function Master() {
  return (
    <SafeAreaView style= { styles.main_icon_section}>
    <View style= {styles.container_master}>
    <Text style={styles.master_text}>
        Get Started
    </Text>
    </View>

    <TextInput>
        
    </TextInput>
    <View style={styles.container}>
        <Text style={styles.texts}>Washing</Text>
    </View>
</SafeAreaView>
  )
}

export default Master