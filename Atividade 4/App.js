import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import Valorant from'./assets/Valorant.png';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing'; 

export default function App() {

  const [selectedImage, setSelectedImage] = React.useState(null);

    let openImagePickerAsync = async () => {
      let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
      if (permissionResult.granted === false) {
        alert("É necessário permissão");
        return;
      }
  
      let pickerResult = await ImagePicker.launchImageLibraryAsync();
      //console.log(pickerResult);
      if (pickerResult.cancelled === true) {
        return;
      }
      setSelectedImage({ localUri: pickerResult.uri });
    };

    let openShareDialogAsync = async () => {
      if (!(await Sharing.isAvailableAsync())) {
        alert(`Uh oh, sharing isn't available on your platform`);
        return;
      }
  
      await Sharing.shareAsync(selectedImage.localUri);
    }; 
  
    if (selectedImage !== null) {
      return (
        <View style={styles.container}>
          <Image
            source={{ uri: selectedImage.localUri }}
            style={styles.thumbnail}
          />
        </View>
      );
    }

  return (
    
    <View style={styles.container}>
      <Image source={Valorant} style={styles.logo} />

      {/* <Image source={{uri: "link"}} style={styles.logo} */}

      <Text style={styles.instructions}>Boa noite!!!</Text>
      <StatusBar style="auto" />
      <TouchableOpacity
           onPress={openImagePickerAsync}
           style={styles.button}>
             <Text style={styles.buttonText}>Escolha uma foto</Text>
      </TouchableOpacity> 
        <TouchableOpacity onPress={openShareDialogAsync} style={styles.button}>
        <Text style={styles.buttonText}>Compartilhar</Text>
        </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c252e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  instructions:{
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
  },
  button:{
    backgroundColor:"yellow",
    padding: 20,
    borderRadius: 5,
  },
  buttonText:{
    fontSize: 20,
    color: '#888',
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  },
});

