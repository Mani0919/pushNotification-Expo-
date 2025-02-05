import { View, Text, Button, TextInput } from 'react-native'
import React, { useState } from 'react'
import { router } from 'expo-router'
import axios from 'axios'

export default function Index() {
  const [value,setValue]=useState("")
  const handle=async()=>
  {
    try {
      const res=await axios.post("https://exp.host/--/api/v2/push/send",{
        "to": "ExponentPushToken[Y1xRAQD4ARWNYPCCwQQNN7]",
        "title":"Hi",
        "body": value
      })
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Index</Text>
      <Button title='uff' onPress={()=>router.push("/browsers")}/>
        <TextInput placeholder='enter something' value={value} onChangeText={(e)=>setValue(e)}/>
        <Button title='submit' onPress={handle}/>
    </View>
  )
}