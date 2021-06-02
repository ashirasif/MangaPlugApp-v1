import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ImageBackground, Button} from 'react-native';
import image from "../image.js";
import checkPermission from "../api.js";    

export default function resScreen({ navigation, route }) {
    var {name, multi, chap} = route.params;

    useEffect(() => {
        console.log(chap)
        if (multi) {
            chap = chap.split("-");
            for (let i = Number(chap[0]); i <= Number(chap[1]); i++) {
                let urlName = name.replace(/[^\w\s]/gi, '');
                urlName = urlName.replace(/\s\s+/g, ' ');
                urlName = urlName.replace(/ /g, "_");
                let url = "http://images.mangafreak.net:8080/downloads/" + urlName + "_" + i;
                checkPermission(url, name+"_"+i)
            }
        } else {
            let urlName = name.replace(/[^\w\s]/gi, '');
            urlName = urlName.replace(/\s\s+/g, ' ');
            urlName = urlName.replace(/ /g, "_");
            let url = "http://images.mangafreak.net:8080/downloads/" + urlName + "_" + chap;
            checkPermission(url, name+"_"+chap)
        }
        
    }, [name, chap])

    return (
        <ImageBackground source={image} style={res_styles.backgroundImage}>
            <View style={res_styles.container}>

                <Text style={res_styles.text}>
                    If downloading hasn't started, head to <Text style={res_styles.linkText} onPress={() => Linking.openURL('https://w11.mangafreak.net')}>mangafreak</Text>  to check
                    if name and chapter number(s) are valid.
                </Text>

                <Button
                title = "Go Back"
                onPress={() => navigation.navigate("Home")}
                color="red"
                />
            </View>
        </ImageBackground>
    );
}


const res_styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
      },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: "transparent"
    },
    text: {
        fontSize: 25,
        padding: 8,
        color: "white",
        fontWeight: "bold",
        fontStyle: "italic"
    },
    linkText: {
        color: "red",
        fontWeight: "bold",
        fontStyle: "italic"
      }
})

