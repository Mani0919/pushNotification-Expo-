import { View, Text,StyleSheet, Button  } from 'react-native'
import React, { useState } from 'react'
import * as WebBrowser from 'expo-web-browser';
export default function Browsers() {
    const [result, setResult] = useState(null);

    const _handlePressButtonAsync = async () => {
      let result = await WebBrowser.openBrowserAsync('https://expo.dev');
      setResult(result);
    };
  return (
    <View style={styles.container}>
      <Button title="Open WebBrowser" onPress={_handlePressButtonAsync} />
      <Text>{result && JSON.stringify(result)}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
    },
  });