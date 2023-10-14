import React from "react";
import { useState } from "react";
import {View,Text,Image} from 'react-native';
import Main from '../components/icon_section/choose'
import Frontside from '../components/icon_section/frontside'

import MyChatApp from '../components/main_app/sockets'
import AppContainer from './fornt'
import MyPage from './masterPage'
const App = () =>{

  return (
    <View>
      <AppContainer />
    </View>
  )
}
export default App;