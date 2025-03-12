import { View, Text, Button, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import axios from "axios";
import { useNotification } from "../context/notification";

export default function Index() {
  const [value, setValue] = useState("");
  const {expoPushToken}=useNotification()
  const handle = async () => {
    try {
      const res = await axios.post("https://exp.host/--/api/v2/push/send", {
        to: expoPushToken,
        title: "Hi",
        badge: 1,
        body: value,
        sound: "true",
      });
      console.log(res);
      if(res.status===200)
      {
        Alert.alert("Notification sent")
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TextInput
        placeholder="enter something"
        value={value}
        onChangeText={(e) => setValue(e)}
        style={{
          padding:5,
          paddingHorizontal: 10,
          marginVertical: 5,
          borderStyle: "solid",
          borderRadius: 4,
          borderColor: "gray",
        }}
      />
      <Button title="Send Notification" onPress={handle} />
    </View>
  );
}
