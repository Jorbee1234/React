import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
          style={{
            height: 300,
            width: 300
          }}
          source={require("./assets/jett.PNG")}
        />
      <br></br>
       <Text>Jorbe Junior</Text>
       <Text>6° Periodo Unilasalle</Text>
     <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
