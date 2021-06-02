
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ImageBackground, Button, TextInput, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { Linking } from 'react-native';
import back_img from "../image.js";


export default function HomeScreen({ navigation }) {
    const [name, setName] = useState('');  
    const [chap, setChap] = useState('');
    const [Multi, setMultiple] = useState(false)
    return (
      <ImageBackground source={back_img} style={home_styles.backgroundImage}>
        <ScrollView> 
          <View style={home_styles.container} >

            <Text style={home_styles.text}>
              This app relies on <Text style={home_styles.linkText} onPress={() => Linking.openURL('https://w11.mangafreak.net')}>mangafreak</Text> to
              download manga. Since downloading from there is tedious (downloading zip of each chapter and extracting them for images), 
              I made this. Just make sure that the name and chapters are according to mangafreak.
            </Text>

            <TextInput
              onChangeText={(text) => setName(text)}
              style={home_styles.input}
              placeholder="enter manga name here..."
              placeholderTextColor="#fff"
            />

            <View style={home_styles.pickerView}>
            <Picker
              selectedValue="Single"
              dropdownIconColor="white"
              style={home_styles.picker}
              onValueChange={(itemValue, itemIndex) => {
                if (itemValue == "multiple") {setMultiple(true)}
                else {setMultiple(false)}
              }}
            >
              <Picker.Item label="Download one chapter" value="single"/>
              <Picker.Item label="Download multiple chapters" value="multiple" />
            </Picker>
            </View>
          
            { Multi ? (
              <TextInput
              onChangeText={(text) => setChap(text)}
              style={home_styles.input}
              placeholder="enter range of chap eg: '1-100'"
              keyboardType="numeric"
              placeholderTextColor="#fff" 
              />
            ) : (
              <TextInput
              onChangeText={(text) => setChap(text)}
              style={home_styles.input}
              keyboardType="numeric"
              placeholder="enter the chapter number"
              placeholderTextColor="#fff" 
              />
            )}     

            <Button
              title = "Download"
              onPress={() => navigation.navigate("Download", {
                name: name,
                multi: Multi,
                chap: chap
              })}
              color="red"
            />
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
 
  const home_styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 10,
      backgroundColor: 'transparent',
      justifyContent: 'flex-start'
    },
    backgroundImage: {
      flex: 1,
      width: null,  
      height: null,
      resizeMode: 'cover'
    },
    input: {
      height: 40,
      fontSize: 17,
      padding: 7,
      marginBottom: 12,
      marginTop: 12,
      borderWidth: 1,
      color: "white",
      borderColor: "white"
    },
    text: {
      padding: 8,
      fontSize: 17,
      color: "white"
    },
    picker: {
      height: 40,
      color: "white",
      borderColor: "white",
      padding: 5,
    },
    pickerView :{
      borderWidth: 1,
      borderColor: "white"
    },
    linkText: {
      color: "red",
      fontWeight: "bold",
      fontStyle: "italic"
    }
  })